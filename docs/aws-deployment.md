# AWS deployment

This repo is set up to deploy the built site to an S3 bucket fronted by CloudFront.

## GitHub configuration

Create these repository settings before enabling the workflow:

- Repository secret: `AWS_DEPLOY_ROLE_ARN`
- Repository variable: `AWS_REGION`
- Repository variable: `AWS_S3_BUCKET`
- Repository variable: `AWS_CLOUDFRONT_DISTRIBUTION_ID`

The workflow assumes GitHub OIDC and does not require long-lived AWS keys in GitHub.

## Expected AWS resources

- An ACM certificate in `us-east-1` for `ryleyreid.com` and `www.ryleyreid.com`
- A private S3 bucket for the site assets
- A CloudFront distribution with:
  - the S3 bucket as the origin
  - `index.html` as the default root object
  - a 403/404 fallback to `/index.html` if you want SPA-style refresh support
- Route 53 hosted zone records for the apex and `www`

## Deploy behavior

Every push to `main`:

1. installs dependencies
2. builds the app
3. syncs `dist/` to S3
4. invalidates the CloudFront cache
