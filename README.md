# Permanent URLs (PURLs) for HMC 

This repository provides a service for managing Permanent URLs (PURLs). We use per-directory Apache configuration files (.htaccess files) to redirect PURL requests to their real locations on the Web. 

## Benefits
Provide a long-lasting reference to a digital object (e.g. article, dataset, video, person, instrument, organization) which remains constant. Identify that object regardless of changes to its location on the Web. The service supports content negotiation to return a specific representation to the client.

As a result we guarantee:
- A resource can be reliably referenced for future access by humans and software.
- Links to resources do not break.
- Disambiguation of various entities, e.g. authors having the same name. 
- Make researchers, their affiliations and their contributions more easily discoverable. 
- Long-term accessibility as a key element of FAIR data.

## Status
The service is under development.

## Adding / Updating PURLs

Please use one of the following options to make, add or update your PURLs 
which will be in the form `https://purl.hmc-services.de/[prefx]/[subdirectory]`:

1. [Create a new issue](https://github.com/saidfathalla/PID-Service/issues/new?assignees=&labels=&template=request-purl.md&title=%5BNew+PURL%5D) describing the change you require.

2. Forking this repository:
      * [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) me.
      * Add or update a new redirect entry and [commit](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project) your changes.
      * Submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for your changes. 
 3. Send an e-mail: send a request to [purls@fz-juelich.de](mailto:purls@fz-juelich.de). 
    Make sure to include information as specified in the ISSUE_TEMPLATE (e.g. prefix, resource url, resource version, etc).

After submitting your Pull Request, the maintainers of this repository will check your Pull Request and merge it into the main branch so that you can see your PURL in our repository and the resolution is ready.

## Good practice when submitting requests via Pull Requests
You can support the maintainers of the service by pursuing the following in your 
Pull Requests:

* Provide your *contact info* (e.g. name, email, affiliation, etc) in the README.md or .htaccess as comments.
* *Test* your links and .htaccess syntax locally.
* *Squash multiple commits* into one commit before a pull request. 
* Provide *descriptive commit details* (e.g. resource name, what changes made, etc).
