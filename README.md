# Permanent Identifiers for Digital Assets
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/saidfathalla/PID-service) 
![status](https://img.shields.io/badge/status-down-green)

This repository provides a service for managing Permanent URLs (PURLs) with a root URL (https://purls.hmc.de/) as the resolver reference. Per-directory Apache configuration files (.htaccess files) are used to redirect PURL requests to their real locations on the Web. PURLs redirect HTTP clients using [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).



## Content Negotiation 
Our URL resolver on the supports HTTP [Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation). 
In HTTP, content negotiation is the mechanism that is used for serving different representations of a resource to the same URI. This helps the user agent to specify which representation (e.g., document language, file format, or content encoding) is needed each time requesting the same URI. You can use this to request either HTML or RDF (with different [RDF serializations](https://en.wikipedia.org/wiki/Resource_Description_Framework#Serialization_formats)) representations.

### Testing Content Negotiation 
You can use the Linux curl command line utility to specify a particular representation of a resource to the same URI as follows:

To request the HTML document describing the [scientific events ontology](https://saidfathalla.github.io/SEOontology/Documentation/SEO.html), the following command could be used

`curl -L -H “Accept: text/html” https://purls.hmc.de/seo`

To request the RDF file of the ontology, the following command could be used

`curl -L -H “Accept: application/rdf+xml”  https://purls.hmc.de/seo`


## Motivation
After some time many URLs start decaying because e.g., the resource is moved to another location or the domain name of an organization changes – a process widely known as [Link Rot](https://en.wikipedia.org/wiki/Link_rot). Therefore, users receive a [`404 not found`](https://en.wikipedia.org/wiki/HTTP_404).

## Main Goal
Provide an open and reliable reference to digital resources thus enabling future access by both humans and machines.

## Benefits
Provide a long-lasting reference to a digital object (e.g., articles, datasets, videos, persons, organizations... etc) which remains constant for identifying that object regardless of changes to its location on the Web. 
Therfore,
- a resource can be reliably referenced for future access by humans and software.
- links to resources do not break.
- researchers, their affiliations and their contributions become more easily discoverable. 
- achieve one of the key elements in [FAIR principles](https://www.go-fair.org/fair-principles/).
- support disambiguating various entities, e.g. authors having the same name. 

## Status
The service is under development.

## Adding / Updating PURLs

We provide means, to our user-community, to include new names in the root URL (e.g. https://purls.hmc.de/resource1).
To do so, please use one of the following options to make add or update your PURLs 
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
* *Squash multiple commits* into one commit before a pull request 
* Provide a *descriptive commit details* (e.g. resource name, what changes made,... etc).


