Please copy image files from the Flask `static/images/` folder here so the React frontend can serve them.

Example:
 - static/images/darshanlog.jpg -> frontend/public/images/darshanlog.jpg

I couldn't copy binary image files automatically. Run this in PowerShell from the workspace root:

```powershell
Copy-Item static\images\darshanlog.jpg frontend\public\images\darshanlog.jpg
```

Or on Linux/macOS:

```bash
cp static/images/darshanlog.jpg frontend/public/images/darshanlog.jpg
```
