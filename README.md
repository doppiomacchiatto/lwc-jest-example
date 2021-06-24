# LWC Components

This project contains a Lightning Web Component (LWC) with a Jest unit test.  This project is used to showcase the power
of a CI/CD pipeline.  Feel free to use and extend!

# Init NodeJs packages
My preference is to use yarn as the nodejs package manager.
1. Run the following command on the command line:>
``` yarn add ./package.json```
That's it.  

If you prefer an alternate method let Visual Studio do the work for you!!

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## VSCode Extensions
Here's the list of my favorite Salesforce DX plugins.

The directory .vscode, extensions.json defines the extensions.

```
{
  "recommendations": [
    "salesforce.salesforcedx-vscode",
    "redhat.vscode-xml",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "financialforce.lana"
  ]
}
```

Feel free to replace the optional extensions.
* redhat.vscode-xml
* dbaeumer.vscode-eslint
* esbenp.prettier-vscode
* financialforce.lana

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)