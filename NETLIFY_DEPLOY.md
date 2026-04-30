# Deploy Next.js to Netlify with Custom Domain

## Step 1: Install Netlify Plugin (Required for Next.js)

```bash
npm install @netlify/plugin-nextjs
```

## Step 2: Create netlify.toml

Create file `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Step 3: Commit and Push

```bash
git add .
git commit -m "Add Netlify config for deployment"
git push origin main
```

## Step 4: Connect to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** and authorize Netlify
4. Choose your repository: `vijay7824/estarra`
5. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **"Deploy site"**

Wait 2-3 minutes for build to complete.

## Step 5: Add Custom Domain (estarra.in)

1. In Netlify Dashboard, go to **Site Settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `estarra.in`
4. Click **Verify** → **Add domain**

## Step 6: Update DNS Records

Go to your domain registrar (where you bought estarra.in) and update DNS:

### Option A: Netlify DNS (Recommended)
Netlify will show you nameservers. Replace your current nameservers with:
- `dns1.p02.nsone.net`
- `dns2.p02.nsone.net`
- `dns3.p02.nsone.net`
- `dns4.p02.nsone.net`

### Option B: Custom DNS Records
If you want to keep your current DNS provider, add these records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| A | @ | 99.83.231.61 |
| CNAME | www | your-site-name.netlify.app |

## Step 7: Enable HTTPS (SSL)

1. Netlify Dashboard → **Domain management**
2. Click **"HTTPS"** → **"Verify DNS configuration"**
3. Netlify will auto-provision SSL certificate
4. Enable **"Force HTTPS"** (redirect HTTP to HTTPS)

## Step 8: Test Your Site

1. Visit `https://estarra.in` - should show your new Next.js site
2. Check all pages work correctly
3. Test contact form, WhatsApp buttons, voice agent

## Step 9: Handle Old Site (Optional)

### Option 1: Pause/Delete Old Site
1. Go to your old Netlify site dashboard
2. **Site settings** → **General** → **Delete site** (or pause builds)

### Option 2: Keep as Backup
Rename old site to `old-estarra.netlify.app` before changing DNS

## Troubleshooting

### Build Fails?
- Check build logs in Netlify
- Ensure `netlify.toml` is correct
- Make sure all dependencies are in `package.json`

### Domain Not Working?
- DNS changes take 5-48 hours to propagate
- Check with: https://dnschecker.org
- Verify SSL certificate is provisioned

### API Routes Not Working?
- Ensure `@netlify/plugin-nextjs` is installed
- API routes work automatically with the plugin

## Verification Checklist

- [ ] Netlify build successful
- [ ] Site loads at Netlify subdomain
- [ ] Custom domain added in Netlify
- [ ] DNS records updated at registrar
- [ ] HTTPS/SSL working
- [ ] estarra.in loads new Next.js site
- [ ] All buttons/forms work correctly
- [ ] Old site removed/paused
