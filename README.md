# Permanent Identifiers (PIDs) for HMC 

This repository provides a service for managing Permanent URLs (PURLs). We use per-directory Apache configuration files (.htaccess files) to redirect PURL requests to their real locations on the Web. 

## Benefits
Provide a long-lasting reference to a digital object (e.g., articles, datasets, videos, persons, instruments, organization) which remains constant for identifying that object regardless of changes to its location on the Web. As a result we grauntee:
- A resource can be reliably referenced for future access by humans and software.
- Links to resources do not break.
- Disambiguation of various entities, e.g. Authors. 
- Make researchers, their affiliations and their contributions more easily discoverable. 
- A key element in FAIR data.


## Status
The service is under development.

## Adding / Updating PURLs

Please use one of the following options to make add or update your PURLs 
which wll be in the form `https://purl.hmc-services.de/[prefx]/[subdirectory]`:

1. [Create a new issue](https://github.com/saidfathalla/PID-Service/issues/new?assignees=&labels=&template=request-purl.md&title=%5BNew+PURL%5D) describing the change you require.

2. Forking this repository:
      * [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) me.
      * Add or update a new redirect entry and [commit](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project) your changes.
      * Submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for your changes. 
 3. Send an e-mail: send a request to [purls@fz-juelich.de](mailto:purls@fz-juelich.de). 
    Make sure to include neccessary information (e.g. prefix, resource url, resource versions... etc).     

After submitting your Pull Request, the maintainers of this repository will then check your Pull Request and merge it into the main branch so that you can see your PURL in our repository and the resolution is ready.

## Good practice when submitting requests via Pull requests
You could support the maintainers of the service by pursuing the following in your 
Pull Requests:

* Provide your *contact info* (e.g. Name, email, affiliation ... etc) in the README.md or .htaccess  as comments.
* *Test* your links and .htaccess syntax locally.
* *Squash_ multiple commits** into one commit before a pull request 
* Provide a *descriptive commit details* (e.g. resource name, what changes made,... etc).


