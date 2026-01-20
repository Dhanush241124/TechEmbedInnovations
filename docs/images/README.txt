Please copy image files from the Flask `static/images/` folder here so the React frontend can serve them.

Example:
 - static/images/darshanlog.png -> frontend/public/images/darshanlog.png

I couldn't copy binary image files automatically. Run this in PowerShell from the workspace root:

```powershell
Copy-Item static\images\darshanlog.png frontend\public\images\darshanlog.png
```

Or on Linux/macOS:

```bash
cp static/images/darshanlog.png frontend/public/images/darshanlog.png
```
