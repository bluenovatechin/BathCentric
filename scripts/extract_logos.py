import zlib
import re

def generate_svg(pdf_path, padding=2):
    with open(pdf_path, 'rb') as f:
        content = f.read()
    streams = re.findall(rb'stream[\r\n]+(.*?)[\r\n]+endstream', content, re.DOTALL)
    decomp = zlib.decompress(streams[0]).decode('latin1')
    
    tokens = decomp.split()
    paths = []
    current_color = None
    current_d = []
    all_points = []
    
    i = 0
    stack = []
    while i < len(tokens):
        t = tokens[i]
        if t in ['m', 'l', 'c', 'v', 'y', 'h', 're', 'f', 'f*', 'F', 'S', 's', 'B', 'B*', 'b', 'b*', 'n', 'scn', 'rg', 'k']:
            if t == 'scn':
                vals = [float(x) for x in stack[-3:]]
                r, g, b = int(round(vals[0]*255)), int(round(vals[1]*255)), int(round(vals[2]*255))
                current_color = f'#{r:02x}{g:02x}{b:02x}'
                stack = []
            elif t == 'm':
                x, y = float(stack[-2]), float(stack[-1])
                current_d.append(('M', [(x, y)]))
                all_points.append((x, y))
                stack = []
            elif t == 'l':
                x, y = float(stack[-2]), float(stack[-1])
                current_d.append(('L', [(x, y)]))
                all_points.append((x, y))
                stack = []
            elif t == 'c':
                x1, y1, x2, y2, x3, y3 = [float(x) for x in stack[-6:]]
                current_d.append(('C', [(x1, y1), (x2, y2), (x3, y3)]))
                all_points.extend([(x1, y1), (x2, y2), (x3, y3)])
                stack = []
            elif t == 'h':
                current_d.append(('Z', []))
                stack = []
            elif t in ['f', 'f*']:
                fill_rule = 'evenodd' if t == 'f*' else 'nonzero'
                paths.append((current_color, fill_rule, current_d))
                current_d = []
                stack = []
            else:
                stack = []
        else:
            stack.append(t)
        i += 1
        
    xs = [p[0] for p in all_points]
    ys = [p[1] for p in all_points]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    
    w = max_x - min_x + 2 * padding
    h = max_y - min_y + 2 * padding
    
    def build_svg(dark_mode=False):
        svg_paths = []
        for color, rule, cmds in paths:
            c = color.upper()
            if dark_mode:
                if c == '#133855':
                    c = '#FFFFFF'
                elif c == '#5D5E62':
                    c = '#F1F5F9'
                elif c == '#339CD3':
                    c = '#38BDF8'
            path_str_parts = []
            for cmd, pts in cmds:
                if cmd == 'M':
                    sx = pts[0][0] - min_x + padding
                    sy = max_y - pts[0][1] + padding
                    path_str_parts.append(f'M {sx:.2f} {sy:.2f}')
                elif cmd == 'L':
                    sx = pts[0][0] - min_x + padding
                    sy = max_y - pts[0][1] + padding
                    path_str_parts.append(f'L {sx:.2f} {sy:.2f}')
                elif cmd == 'C':
                    s1x = pts[0][0] - min_x + padding
                    s1y = max_y - pts[0][1] + padding
                    s2x = pts[1][0] - min_x + padding
                    s2y = max_y - pts[1][1] + padding
                    s3x = pts[2][0] - min_x + padding
                    s3y = max_y - pts[2][1] + padding
                    path_str_parts.append(f'C {s1x:.2f} {s1y:.2f}, {s2x:.2f} {s2y:.2f}, {s3x:.2f} {s3y:.2f}')
                elif cmd == 'Z':
                    path_str_parts.append('Z')
            d = ' '.join(path_str_parts)
            svg_paths.append(f'  <path d="{d}" fill="{c}" fill-rule="{rule}" />')
            
        svg_content = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" fill="none">\n' + '\n'.join(svg_paths) + '\n</svg>\n'
        return svg_content

    return build_svg(False), build_svg(True), (w, h)

if __name__ == '__main__':
    logo_light, logo_dark, (lw, lh) = generate_svg('Bathcentric Logo.pdf', padding=2)
    with open('public/images/logo.svg', 'w') as f:
        f.write(logo_light)
    with open('public/images/logo-white.svg', 'w') as f:
        f.write(logo_dark)
    print(f'Wrote logo.svg and logo-white.svg ({lw:.1f}x{lh:.1f})')

    b_light, b_dark, (bw, bh) = generate_svg('Bathcentric-B Logo.pdf', padding=3)
    with open('public/images/logo-symbol.svg', 'w') as f:
        f.write(b_light)
    with open('public/images/logo-symbol-white.svg', 'w') as f:
        f.write(b_dark)
    with open('public/favicon.svg', 'w') as f:
        f.write(b_light)
    print(f'Wrote logo-symbol.svg, logo-symbol-white.svg, and favicon.svg ({bw:.1f}x{bh:.1f})')
