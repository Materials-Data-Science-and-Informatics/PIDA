# Permanent Identifiers for Digital Assets (PIDA)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/saidfathalla/PID-Service) 
![status](https://img.shields.io/badge/status-down-green) 
![GitHub contributors](https://img.shields.io/github/contributors/saidfathalla/PID-Service) 
![GitHub](https://img.shields.io/github/license/saidfathalla/PID-Service)


This repository provides a service for managing Permanent URLs (PURLs) with a root URL 
(http://purls.helmholtz-metadaten.de/) as the resolver reference. Per-directory Apache configuration files 
(.htaccess files) are used to redirect PURL requests to their real locations on the Web. 
PURLs redirect HTTP clients using [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

## Table of contents

1. [Motivation](#motivation)
2. [Objective](#Objective)
3. [Secured Communication](#Communication)
4. [Content Negotiation](#Negotiation)
    - [Testing](#Testing)
5. [Benefits](#Benefits)
6. [Adding/Updating PURLs](#AddingUpdating)
7. [Good practice](#Goodpractice)
8. [License](#License)
9. [Acknowledgments](#Acknowledgements)


## Motivation <a name="motivation"></a>
After some time many URLs start decaying because may be e.g., the resource is moved to another 
location or the domain name of an organization changes – a process widely known as 
[Link Rot](https://en.wikipedia.org/wiki/Link_rot). Therefore, users receive a 
[`404 not found`](https://en.wikipedia.org/wiki/HTTP_404).

## Objective <a name="Objective"></a>
Provide an open and reliable reference to digital resources thus enabling future access 
by both humans and machines.

## Secured Communication <a name="Communication"></a> (*in progress*)
PIDA uses [HTTPS](https://en.wikipedia.org/wiki/HTTPS) communication protocol to 
protect the integrity and confidentiality of data between the clients and the service. 
This is pretty necessary for systems that require high levels of security, such as financial, 
medical, and public infrastructure ones.

## Content Negotiation <a name="Negotiation"></a>
Our URL resolver supports [Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation). 
In HTTP, content negotiation is the mechanism that is used for serving different representations 
of a resource to the same URI. This helps the user agent to specify which representation (e.g., 
document language, file format, or content encoding) is needed each time requesting the same URI. 
You can use this to request either HTML or RDF (with different [RDF serializations](https://en.wikipedia.org/wiki/Resource_Description_Framework#Serialization_formats)) representations.

### Testing <a name="Testing"></a>
Content negotiation can be tested using the `curl` command line utility to specify a particular representation of a 
resource to the same URI as follows:

To request the HTML document describing the 
[scientific events ontology](https://saidfathalla.github.io/SEOontology/Documentation/SEO.html), 
the following command could be used
```bash
curl -L -H “Accept: text/html” https://purls.hmc.de/seo
```

To request the RDF file of the ontology, the following command could be used
```bash
curl -L -H “Accept: application/rdf+xml”  https://purls.helmholtz-metadaten.de/seo
```
You will get results look like:
```console
HTTP/1.1 200 OK
Content-Length: 13746
Content-Type: application/rdf+xml
Last-Modified: Thu, 18 Jan 2007 10:27:22 GMT
Accept-Ranges: bytes
ETag: "bf3d723deb3ac71:54d"
Server: Microsoft-IIS/6.0
X-Powered-By: ASP.NET
Date: Tue, 06 Feb 2007 10:52:51 GMT
```

Windows users can get cURL binaries from [here](http://curl.haxx.se/download.html#Win32).

## Benefits <a name="Benefits"></a>
PIDA provides a long-lasting reference to a digital object, such as articles, datasets, videos, persons, 
organizations... etc, which remains constant for identifying that object regardless of changes to its location on the Web. 
Therefore,
- a resource can be reliably referenced for future access by humans and software.
- links to resources do not break.
- researchers, their affiliations and their contributions become more easily discoverable. 
- achieve one of the key elements in [FAIR principles](https://www.go-fair.org/fair-principles/).
- support entities [disambiguation](https://en.wikipedia.org/wiki/Disambiguation_(disambiguation)), 
  e.g., authors having the same name. 


## Adding/Updating PURLs <a name="AddingUpdating"></a>

We provide means, to our user-community, to include new names in the root URL (e.g., https://purls.helmholtz-metadaten.de/).
To do so, please use one of the following options to make add or update your PURLs 
which wll be in the form `https://purls.helmholtz-metadaten.de/[prefx]/[subdirectory]`:

1. **Issue tracker**: [Create a new issue](https://github.com/saidfathalla/PID-Service/issues/new?assignees=&labels=&template=request-purl.md&title=%5BNew+PURL%5D) describing the change you require.

2. **Forking this repository**:
      i. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) me.
      ii. Prepare your [.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html) file (we recommend using [HTAGen tool](https://github.com/saidfathalla/HTAGen-tool) in this step).
      iii. Add or update your entries and [commit](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project) your changes.
      iv. Submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for your changes. 
 3. **E-mail**: send an email to [PIDA admin](mailto:purls@fz-juelich.de). 
    Make sure to include necessary information (e.g., prefix, resource URL, resource versions... etc).     

After submitting your pull request, the maintainers of PIDA will then check your pull request 
and merge it into the main branch so that you can see your PURL in our repository and the resolution is ready.

## Good practice when submitting requests via Pull requests <a name="Goodpractice"></a>
You could support the maintainers of the service by pursuing the following in your 
Pull Requests:

* Provide your contact info (e.g. Name, email, affiliation ... etc) in the *README.md* or *.htaccess*  as comments.
* Test your links and .htaccess syntax locally.
* [Squash](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) multiple commits into one commit before a pull request. 
  This helps to ensure a cleaner merge history. 
* Provide a descriptive commit details (e.g. resource name, what changes made,... etc).

## License <a name="License"></a>
The code is licensed under a [MIT license](./LICENSE). Copyright © 2022. 

## Acknowledgments <a name="Acknowledgements"></a>

<div>
<img style="vertical-align: middle;" alt="HMC Logo" src="https://helmholtz-metadaten.de/storage/88/hmc_Logo.svg" width=50% height=50% />
&nbsp;&nbsp;
<img style="vertical-align: middle;" alt="FZJ Logo" src="https://upload.wikimedia.org/wikipedia/de/8/8b/J%C3%BClich_fz_logo.svg" width=30% height=30% />
</div>
<br />

This project was developed at the Institute for Materials Data Science and Informatics
(IAS-9) of the Jülich Research Center and funded by the Helmholtz Metadata Collaboration
(HMC), an incubator-platform of the Helmholtz Association within the framework of the
Information and Data Science strategic initiative.
