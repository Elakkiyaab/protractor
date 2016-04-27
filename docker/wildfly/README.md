Dockerfile for WildFly application server
=========================================

This image contains a standalone instance of [WildFly](http://wildfly.org) running on Oracle Java 8.

Customization
-------------

You can use this Dockerfile as a base for your application image adding your WAR/EAR to 
*/opt/wildfly/standalone/deployments* directory, overriding 
*/opt/wildfly/standalone/configuration/standalone.xml* and adding custom modules to 
*/opt/wildfly/modules/system/layers/base* if necessary.

Please note that if you need to perform system customization tasks, like installing additional 
software, tweaking server's timezone or similar, you need to switch to super user with *USER root*
first, but then at the end of your Dockerfile you need to switch back to *USER wildfly* again.

Alternatively, you can run the image as-is, and use WildFly CLI tools to access the remote
management API exposed by the container on port 9990 to deploy and configure your application.
