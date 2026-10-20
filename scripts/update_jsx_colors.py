import glob

files = glob.glob('src/pages/*.jsx') + glob.glob('src/components/*.jsx')
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    if '#C5A880' in content or '#c5a880' in content:
        updated = content.replace("style={{ color: '#C5A880' }}", "style={{ color: 'var(--color-accent-dark)' }}")
        updated = updated.replace("color: '#C5A880'", "color: 'var(--color-accent)'")
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(updated)
        print(f'Updated {fpath}')
