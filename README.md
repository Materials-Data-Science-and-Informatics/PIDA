# PID service (under development)


This repository provides a service for managing Permanent URLs (PURLs). We use per-directory Apache configuration files (.htaccess files) to redirect PURL requests to their real locations on the Web. 

## Status
The service is under development.

# Adding / Updating PURLs

Please use one of the following options to make add or update your PURLs 
which wll be in the form `https://purl.hmc-services.de/[prefx]/[subdirectory]`:

1. [Create a new issue](https://github.com/saidfathalla/PID-Service/issues/new?assignees=&labels=&template=request-purl.md&title=%5BNew+PURL%5D) describing the change you require.

2. Forking this repository:
      * [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) me.
      * Add or update a new redirect entry and [commit](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project) your changes.
      * Submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for your changes. 
      

After submitting your Pull Request, the maintainers of this repository will then check your Pull Request and merge it into the main branch so that you can see your PURL in our repository and the resolution is ready.
