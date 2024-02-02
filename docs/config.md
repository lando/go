---
title: Configuration
description: Learn how to configure the Lando Go service.
---

# Configuration

Here are the configuration options, set to the default values, for this service. If you are unsure about where this goes or what this means we *highly recommend* scanning the [services documentation](https://docs.lando.dev/core/v3/lando-service.html) to get a good handle on how the magicks work.

Also note that options in addition to the [build steps](https://docs.lando.dev/core/v3/lando-service.html#build-steps) and [overrides](https://docs.lando.dev/core/v3/lando-service.html#overrides) that are available to every service are shown below:

```yaml
services:
  myservice:
    type: go:1.13
    ssl: false
    command: tail -f /dev/null
```

## Specifying a command

Note that if you *do not* define a `command` for this service, it will effectively be a "cli" container (e.g. it will not serve or run an application by default but will be available to run `go` commands against).

If you want to actually launch a `go` application, consider setting the `command` to something as shown below:

```yaml
services:
  myservice:
    type: go
    command: go run /app/my-server.go
```

## Using SSL

Also note that `ssl: true` will only generate certs in the [default locations](https://docs.lando.dev/core/v3/security.html) and expose port `443`. It is up to the user to use the certs and secure port correctly in their application like as in the `go` snippet below:

```go
// Starting HTTPS server
go func() {
  log.Printf("Staring HTTPS service on :443")
  if err := http.ListenAndServeTLS(":443", "/certs/cert.crt", "/certs/cert.key", nil); err != nil {
    // Not important for this example
  }
}()
```

## Adding tooling commands

By default a service will not do any tooling routing for you but you can add helpful `lando` commands.

```yaml
tooling:
  donet:
    service: myservice
```

You can then invoke them on the command line.

```bash
lando dotnet
```

Lando tooling is actually pretty powerful so definitely check out [the rest](https://docs.lando.dev/core/v3/tooling.html) of its cool features.

## Adding routing

By default a service will not do any proxy routing for you but you can add your own.

```yaml
proxy:
  myservice:
    - myapp.lndo.site
    - something.else.local
```

Lando proxying is actually pretty powerful so definitely check out [the rest](https://docs.lando.dev/core/v3/proxy.html) of its cool features.
