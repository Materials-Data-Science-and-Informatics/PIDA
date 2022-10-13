# Persistent Identifiers for Digital Assets
[![status](https://img.shields.io/badge/status-up-green)](https://purls.helmholtz-metadaten.de/diso) 
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/saidfathalla/PID-Service) 
![GitHub contributors](https://img.shields.io/github/contributors/saidfathalla/PID-Service) 
![GitHub](https://img.shields.io/github/license/saidfathalla/PID-Service)



<img style="center-align: middle;" alt="Metador Logo" src="https://github.com/Materials-Data-Science-and-Informatics/Logos/blob/main/Pida/Pida_Logo_Text.png" width=30% height=30% /> 

**P**ersistent **I**dentifiers for **D**igital **A**ssets

PIDA is a service for providing web resources [Persistent URLs (PURLs)](https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator), to ensure reliable access to them.
Therefore, they remain available for future access by both humans and machines.

## Table of contents

1. [Why use PIDA?](#motivation)
2. [Technical details](#Technical)
    * [Secured Communication](#Communication)
    * [Content Negotiation](#Negotiation)
        * [Testing](#Testing)
3. [Managing PURLs](#AddingUpdating)
4. [Good practice](#Goodpractice)
5. [License](#License)
6. [Acknowledgments](#Acknowledgements)

https://user-images.githubusercontent.com/21238109/190993847-e6e52f30-fd50-43d8-964e-b19aeba27c89.mp4

## Why use PIDA? <a name="motivation"></a>

Many web addresses can decay over time, for example, if the resource moves to another location or the domain name of an organization changes. 
This process is often known as [Link rot](https://en.wikipedia.org/wiki/Link_rot). 
When users try to access a decayed link, they receive an error 
[`404 not found`](https://en.wikipedia.org/wiki/HTTP_404).

PIDA provides a long-lasting reference to a digital object -- such as an article, dataset, video, person, or organization -- which consistently identifies that object regardless of the object’s location on the Internet. 
Using a PURL provided by PIDA:
- a resource can be reliably referenced for future access by humans and software
- links to resources do not break
- resources become more easily discoverable -- for example, researchers, their affiliations, and their contributions
- resources are findable -- one of the key elements in the [FAIR principles](https://www.go-fair.org/fair-principles/) of data management
- supports [disambiguation](https://en.wikipedia.org/wiki/Disambiguation_(disambiguation)) of entities, for example, authors with the same name can be distinguished from each other

## Technical details<a name="Technical"></a>

The root URL for all PIDA PURLs is `https://purls.helmholtz-metadaten.de/`.
Each PURL has the form `https://purls.helmholtz-metadaten.de/[prefix]/[subdirectory]`.

PIDA redirects PURL requests from HTTP clients to their real locations on the Internet using per-directory Apache configuration files ([.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html) files) and [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). 

### Secured Communication <a name="Communication"></a> (*in progress*)
PIDA uses [HTTPS](https://en.wikipedia.org/wiki/HTTPS) communication protocol to 
protect the integrity and confidentiality of data between clients and the service. 
This is especially important for systems that require high levels of security, such as those in the financial, medical, and public infrastructure sectors.

### Content Negotiation <a name="Negotiation"></a>
It is important to distinguish between URLs for web documents and URIs for semantic web resources: 
- requests to **URLs for web documents** should be sent to HTML documents. 
- requests to **URIs for semantic web resources** should be sent to RDF documents. 
PIDA supports [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) to deliver different representations of a resource from a single URI. When a user or agent requests a URI, content negotiation allows them to specify which representation they require (e.g. document language, file format, or content encoding). 
Having a PIDA PURL, clients can request either HTML or RDF (with different [RDF serializations](https://en.wikipedia.org/wiki/Resource_Description_Framework#Serialization_formats)) representations.

#### Testing <a name="Testing"></a>
Content negotiation can be tested using the `curl` command-line utility to specify a particular representation of a resource to the same URI.  For example:
- to request the HTML document describing the 
[scientific events ontology](https://saidfathalla.github.io/SEOontology/Documentation/SEO.html):
```bash
curl -L -H “Accept: text/html” https://purls.hmc.de/seo
```
- to request the RDF file of the ontology:
```bash
curl -L -H “Accept: text/html”  https://purls.helmholtz-metadaten.de/seo
```
You will get results that look like:
```console
HTTP/1.1 303 See Other
Date: Tue, 22 Feb 2022 14:18:54 GMT
Server: Apache/2.4.29 (Ubuntu)
Access-Control-Allow-Origin: *
Location: Location: https://saidfathalla.github.io/SEOontology/Documentation/index.html
Content-Type: text/html; charset=iso-8859-1

```

Windows users can get cURL binaries from [here](http://curl.haxx.se/download.html#Win32).


## Managing your PURLs <a name="AddingUpdating"></a>

Please use one of the following options to add or update your PURLs:

- **Issue tracker**: [Create a new issue](https://github.com/saidfathalla/PID-Service/issues/new?assignees=&labels=&template=request-purl.md&title=%5BNew+PURL%5D) (via *Request PURL* issue template) describing the PURL you want to register.

- **Fork this repository**: before using this method, please read the section [Good practice when submitting requests via pull requests](link) below.
	1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) PIDA [repository](https://github.com/saidfathalla/PIDA).
 	2. Prepare your [.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html) file. We recommend using [HTAGen tool](https://github.com/saidfathalla/HTAGen-tool).
	3. Add or update your entries and [commit](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project) your changes.
	4. Submit a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for your changes. 
	5. The maintainers of PIDA will check your pull request 
and merge it into the main branch so that you can see your PURL in our repository.

- **E-mail**: To register a new PURL, you can send an email to [PIDA maintainers](https://purls.helmholtz-metadaten.de/index.html#contact-grid-48245) with the [Request-a-new-PURL](./assets/Request-a-new-PURL-sheet.xlsx) spreadsheet attached. Please make sure you include all necessary information is included in the spreadsheet (e.g. prefix, resource URL, resource versions... etc).  

### Good practice when submitting requests via pull requests <a name="Goodpractice"></a>
Please help the maintainers of PIDA by ensuring you do the following in your pull requests:

* Provide your contact info (e.g. name, email, affiliation ... etc) in the *htaccess*  as comments (cf. [seo](./seo/.htaccess)).
* Test your links and .htaccess syntax locally.
* [Squash](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) multiple commits into one commit before a pull request. 
  This helps to ensure a cleaner merge history. 
* Provide descriptive commit details (e.g. resource name, what changes made,... etc).

## License <a name="License"></a>
The code is licensed under the [MIT license](./LICENSE). Copyright © 2022. 

## Acknowledgments <a name="Acknowledgements"></a>

<div>
<img style="vertical-align: middle;" alt="HMC Logo" src="https://github.com/Materials-Data-Science-and-Informatics/Logos/raw/main/HMC/HMC_Logo_M.png" width=50% height=50% />
&nbsp;&nbsp;
<img style="vertical-align: middle;" alt="FZJ Logo" src="https://github.com/Materials-Data-Science-and-Informatics/Logos/raw/main/FZJ/FZJ.png" width=30% height=30% />
</div>
<br />

This project was developed at the Institute for Materials Data Science and Informatics
(IAS-9) of the Jülich Research Center and funded by the Helmholtz Metadata Collaboration
(HMC), an incubator-platform of the Helmholtz Association within the framework of the
Information and Data Science strategic initiative.
