---
title: Go Lando Plugin
description: Add a highly configurable Go service to Lando for local development with all the power of Docker and Docker Compose.
next: ./config.html
---

# Go

[Go](https://go.dev/) is an open source programming language that makes it easy to build simple, reliable, and efficient software.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/lando-service.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

```yaml
services:
  myservice:
    type: go
```

## Supported versions

*   [1.19](https://hub.docker.com/_/golang/)
*   [1.18](https://hub.docker.com/_/golang/)
*   [1.17](https://hub.docker.com/_/golang/)
*   **[1.16](https://hub.docker.com/_/golang/)** **(default)**
*   [1.15](https://hub.docker.com/_/golang/)
*   [1.14](https://hub.docker.com/_/golang/)
*   [1.13](https://hub.docker.com/_/golang/)
*   [custom](https://docs.lando.dev/core/v3/lando-service.html#overrides)

## Legacy versions

You can still run these versions with Lando but for all intents and purposes they should be considered deprecated (e.g. YMMV and do not expect a ton of support if you have an issue).

*   [1.12](https://hub.docker.com/_/golang/)
*   [1.11](https://hub.docker.com/_/golang/)
*   [1.10](https://hub.docker.com/_/golang/)
*   [1.9](https://hub.docker.com/_/golang/)
*   [1.8](https://hub.docker.com/_/golang/)

## Patch versions

::: warning Not officially supported!
While we allow users to specify patch versions for this service, they are not *officially* supported, so if you use one, YMMV.
:::

To use a patch version, you can do something as shown below:

```yaml
services:
  myservice:
    type: go:1.13.9
```

But make sure you use one of the available [patch tags](https://hub.docker.com/r/library/golang/tags/) for the underlying image we are using.

