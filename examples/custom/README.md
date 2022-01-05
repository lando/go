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
# Should serve over http and https if ssl is set by user
lando ssh -s custom -c "curl http://localhost" | grep HEART
lando ssh -s custom -c "curl https://localhost" | grep HEART
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
