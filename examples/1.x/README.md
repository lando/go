Go Example
==========

This example exists primarily to test the following documentation:

* [Go Service](https://docs.devwithlando.io/tutorials/go.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should use go:1.24 as specified in landofile
lando exec defaults -- go version | grep go1.24

# Should run only on port 80 by default
lando exec defaults -- curl http://localhost | grep HEART
lando exec defaults -- curl https://localhost || echo $? | grep 7

# Should use the patch version if specified by user
lando exec patch -- go version | grep go1.23.1

# Should not serve port 80 for cli
lando exec cli -- curl http://localhost || echo $? | grep 7
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
