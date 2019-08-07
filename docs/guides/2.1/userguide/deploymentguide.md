---
title: Deployment Guide
sidebarDepth: 5
pageClass: userguides
collapsable: true
---
[[toc]]

## 1. Overview
This document provides instructions for deploying Corolar Cloud v2.1. We will be leveraging the Azure DevOps platform for creating a release pipeline that will deploy the Corolar Cloud system. For more general information on Azure DevOps, see [<span  style="color:blue"><u>Microsoft website</u></span>](https://azure.microsoft.com/en-ca/services/devops/).

## 2. Service Principal
Beginning version 2.1, Corolar Cloud will enable users to use two service principals, one with delegated permission for user authentication purpose, and the other with contributor level access for used by Corolar's Interface Management Portal to read the resource groups and the resources within them for the purpose of adopting resource groups, onboarding interfaces, etc.

### 2.1 Service principal for Azure
#### 2.1.1 Creating app registration
1. You can create service principals either by navigating to Azure Active Directory in the Azure portal and then selecting 'App registrations' from the list of options available on the left  
![screenshot of app registration option1](/img/corolar21/depguide/depimg1.png)  

2. Or by searching with keyword app registration in the search box on the top  
![screenshot of app registration option2](/img/corolar21/depguide/depimg2.png)  

3. Click on the '+ New application registration' option at the top  

    * In the Register an application page enter the following details and click 'Register' at the bottom of the page
    * Name for the service principal (app registration) you are creating
    * Leave the default Supported account type as an organizational directory only in your subscription, or select the one appropriate to  you  
    ![screenshot of new app registration](/img/corolar21/depguide/depimg3.png)  

4. Enter a Redirect URI as https://localhost.com  
![screenshot of new app registration config 1](/img/corolar21/depguide/depimg4.png)  

5. Now head back to the app registration you created, and then from the options on the left select the 'Certificates & secrets' from the left side pane, and then '+ New client secret  
![screenshot of app registration creation](/img/corolar21/depguide/depimg5.png)  

6. In the Add a client secret window, Enter a description (name) for the key you are about to generate, and select one of the options from 'Expires' (preferably Never), and then click 'Add'  
![aad-appreg](/img/corolar21/depguide/depimg6.png)  

7. You will see the key you just created under the 'Client Secrets' section, copy the string in the 'VALUE' column to your preferred editor, because you will not be able to retrieve this once you close/move out of this blade  
![aad-appreg](/img/corolar21/depguide/depimg7.png)  


#### 2.1.2 Granting access to the app registration
1. Now to provide Contributor access to this app registration (service principal), navigate to the 'Subscriptions' option in the Azure portal, and click on the relevant subscription where Corolar will be deployed  
![aad-permissions](/img/corolar21/depguide/permissionimg1.png)  


2. From the left side pane select 'Access Control (IAM)'  
![aad-permissions](/img/corolar21/depguide/permissionimg2.png)  

3. Then click on the 'Add' button in the 'Add a role assignment' tile. Note, the Add button in the 'Add a role assignment' tile will be open only when you are an Azure Active Directory admin or the owner of the subscription  
![aad-permissions](/img/corolar21/depguide/permissionimg3.png)  

    * Find the app registration you created, and then provide Contributor access to the app registration  
    ![aad-permissions](/img/corolar21/depguide/permissionimg4.png)  
    
    > Note, upon saving the role assignment, if you are the administrator/owner of the subscription the role assignment should take effect immediately. If not, then the appropriate administrator or owner should grant the permissions

### 2.2 Service principal for Authentication
This app registration (service principal) will be used for the purpose of authentication. This particular app registration will only have delegated access for authenticating users when they are singing into the Interface Management Portal  

#### 2.2.1 Creating app registration for AAD Authentication
Follow the steps from section 2.1.1 to create the app registration for AAD authentication. If you are intending to use B2C authentication method, then skip this section and go to section 2.3.  

**Providing access for app registration**  
We will be providing delegated level permission to this app registration so it can authenticate users.  

1. Go to the app registration you just created for AD authentication purpose  
![aad-access](/img/corolar21/depguide/accessimg1.png)  

2. From the options available in the left-side panel select 'API Permissions', and then click on '+ Add a permission'  
![aad-access](/img/corolar21/depguide/accessimg2.png)  

3. You will see User.Read with Delegated type for sign-in already available. We need to add a delegated permission reading all users' basic profile. So, in the API permissions blade that opened up select Microsoft Graph from the options available  
![aad-access](/img/corolar21/depguide/accessimg3.png)  

4. Then select 'Delegated permissions' in the following screen  
![aad-access](/img/corolar21/depguide/accessimg4.png)  

5. Once you click the 'Delegated permissions' option, you will see 'Select permissions section at the bottom, search and select the 'User.ReadBasic.All' and 'User.Read' permissions under User.  
![aad-access](/img/corolar21/depguide/accessimg5.png)  

6. Once checked, click on the 'Add permissions' button at the bottom of the same blade  
![aad-access](/img/corolar21/depguide/accessimg6.png)  

7. Once done, go to the 'Authentication' option from the left side pane of the app registration  
![aad-access](/img/corolar21/depguide/accessimg7.png)  

8. In the Authentication blade, select the option 'ID tokens' under the 'Implicit grant' section as shown in the image below, and then click 'Save'  
![aad-access](/img/corolar21/depguide/accessimg8.png)  

#### 2.2.2 Creating app registration for B2C Authentication
If users choose to use B2C authentication method, then navigate to the B2C tenant in the Azure Portal, and create an app registration (service principal) following the steps in section 2.1.1 and provide permissions as mentioned in section 2.2.1. Users can also set up the B2C authentication for authenticating users against the users' Amazon or Google accounts, to do so follow the steps below  

**Creating B2C User Flow**  
User flows define the experience for the users signing up and signing into your application. To set up  

1. In  your B2C tenant, find Azure AD B2C service using the search box and select the same  

2. Click on User Flows (policies) from the options available on the left panel  
![b2c-config](/img/corolar21/depguide/b2cimg1.png)  

3. Click on the New user flow option, and select sign up and sign in option  
![b2c-config](/img/corolar21/depguide/b2cimg2.png)  

4. Enter the following details  
    
    * Name - a name for your user flow
    * Identity providers - select one from the available options
    * Multifactor authentication - enable or disable
    * user attributes and claims - you can leave this blank
    * and hit create  
    ![b2c-config](/img/corolar21/depguide/b2cimg3.png)  

5. Once created, go to the Application claims from the available options, you will see Identity Provider already checked, so go ahead and check the following items as well and then save  

    * Email Addresses
    * Given Name
    * Surname
    * User's Object ID  
    ![b2c-config](/img/corolar21/depguide/b2cimg4.png)  

**Authenticating against Google**
1. Go to Google developer portal and create a new Google Sign-in for websites project  

2. Configure the project for authenticating users of IMP  
![google-auth](/img/corolar21/depguide/googleauthimg1.png)  

**Authenticating against Amazon**
1. Sign into Amazon developer portal and navigate to Security Profile Management  

2. In the Security Profile Management, select the tab Web Settings and enter the following details  
![amazon-auth](/img/corolar21/depguide/amazonauthimg1.png)  

Refer to the guide here to learn how users should sign up when logging into IMP for the first time if you are using the B2C authentication.  

## 3 Creating the release pipeline
Before creating the release pipeline we have to create an Organization and an associated Project in the Azure DevOps platform.  

### 3.1 Create an organization
1. To create an Organization, navigate to Azure DevOps portal and sign in with your Azure/Microsoft credentials  

2. Once signed in, from the left-hand side bottom select the '+ New organization' option  
![create-relpipe](/img/corolar21/depguide/createrelpipeimg1.png)  

3. In the following pop-up enter a name for your organization and select the location you want to host your projects in, and then click continue  
![create-relpipe](/img/corolar21/depguide/createrelpipeimg2.png)  

### 3.2 Create a project
1. Once the Organization is created, you will see the page with options for creating a new Project to get started  
![create-relpipe](/img/corolar21/depguide/createrelprojimg1.png)  
Or you could create a project by clicking on '+ Create project' from the Organization page, if you have moved away earlier after creating the organization  
![create-relpipe](/img/corolar21/depguide/createrelprojimg2.png)  

2. Enter a name for your project like 'Corolar Cloud, select the 'Private' option below to restrict public user access to the project, and then click 'Create'  

#### 3.2.1 Connecting the project to Azure subscription
1. Click on the 'Project settings' option from the left-hand side bottom  
![create-relpipe](/img/corolar21/depguide/projectconnectimg1.png)  

2. In the Project settings page, select the 'Service connections' option under 'Pipelines' from the left side  
![create-relpipe](/img/corolar21/depguide/projectconnectimg2.png)  

3. Now, click on '+ New service connection' and then select the Azure Resource Manager option, as we Corolar components are deployed using ARM template  
![create-relpipe](/img/corolar21/depguide/projectconnectimg3.png)  

4. From the pop-up, select the 'Service Principal Authentication' radio button, and then click on the 'use the full version of the service connection dialog' in the popup  
![create-relpipe](/img/corolar21/depguide/projectconnectimg4a.png)  

once clicked, you will see the following form  
![create-relpipe](/img/corolar21/depguide/projectconnectimg4b.png)  

5. In the form,  

    * Connection name – Should be a name based on the subscription it connects to, ex: 'corolar cloud-dev'
    * Environment – Select AzureCloud from dropdown
    * Scope level – Leave Subscription selected as is
    * Subscription Id – Select the appropriate subscription from the dropdown
    * Service principal client id – Application id of the app registration you created  
    ![create-relpipe](/img/corolar21/depguide/projectconnectimg5e.png)
    * Service principal key – Password that you saved from step 2.1  

6. Then, click on the 'Verify connection', once verified click on 'Ok'. If you encounter any error, please review the values you have entered and try again. We suggest that you keep the 'Allow all pipelines to use this connection' option at the bottom, checked and click Ok.  
![create-relpipe](/img/corolar21/depguide/projectconnectimg6.png)  

### 3.3 Create release pipeline
1. In the Azure DevOps portal, from the left, select 'Pipelines', then select 'Releases' and then click 'New pipeline'  
![create-relpipe](/img/corolar21/depguide/relpipelineimg1.png)  

2. You will see following window on the right side, from the top click on the 'Empty job'  
![create-relpipe](/img/corolar21/depguide/relpipelineimg2.png)  

3. Enter a stage name and then click 'Save' from the top  
![create-relpipe](/img/corolar21/depguide/relpipelineimg3.png)  

4. Once you click on save, you will see the following pop-up to select folder, for now leave the folder as '\'  
![create-relpipe](/img/corolar21/depguide/relpipelineimg4.png)  

> Note, this is because you will be able to create folders to organize different release pipelines only after creating the first pipeline 

5. Now click on the 'Releases' option from the left side, you could see that you now have the ability to create a folder there. You could use that option to create a folder to organize your release pipeline if you want to.  
![create-relpipe](/img/corolar21/depguide/relpipelineimg5.png)  

6. Now select '+ New' and then select 'Import release pipeline'  
![create-relpipe](/img/corolar21/depguide/relpipelineimg6.png)  

7. Use the 'Browse…' option and select the Corolar Cloud v2.0 release pipeline (JSON) file you received from us and then click 'Ok'  
![create-relpipe](/img/corolar21/depguide/relpipelineimg7.png)  

8. You have now successfully imported the Corolar Cloud v2.0 release pipeline  
![create-relpipe](/img/corolar21/depguide/relpipelineimg8.png)  

> Note: You can go ahead and delete CDR and CDR App components if you are not deploying Corolar 

9. Rename the release pipeline by clicking on the pencil icon at the top, the suggested naming convention is 'Corolar Cloud Deployment –V2– [[environment name]]'. Ex: Corolar Cloud Deployment-V2-QA  
![create-relpipe](/img/corolar21/depguide/relpipelineimg9.png)  

#### 3.3.1 Configuring release pipeline
##### 3.3.1.1 Configuring deployment Process  
1. Hover over the 'Tasks' option from the top, you will see a dropdown that lists the components you are about to deploy.  
![create-relpipe](/img/corolar21/depguide/deptaskimg1.png)  

> Note: you will not see CDR and CDR App tasks if you are not deploying CDR along with the Corolar cloud integration environment.

2. Now click on the AKS task from the dropdown and to configure the Agent Pool and Azure subscription information for deployment  
![create-relpipe](/img/corolar21/depguide/deptaskimg2.png)  

3. As a first step Click on 'Agent job' from below and under Agent pool choose Hosted VS2017 from the dropdown  
![create-relpipe](/img/corolar21/depguide/deptaskimg3.png)  

4. Next go to Deploy AKS within the AKS task and select the Azure subscription where the Corolar Cloud environment should be deployed  
![create-relpipe](/img/corolar21/depguide/deptaskimg4.png)  

5. In a similar way select the Azure Subscription for the following items under the Agent Job  

    * Deploy Load Balancer
    * Configure AKS

##### 3.3.1.2 Configuring other deployment tasks
1. Once the AKS task is updated, we will move on to other tasks and update them in a similar manner  

2. The list below shows the list of tasks and its configuration that needs be updated for deployment  

    * **Corolar**  
    ![create-relpipe](/img/corolar21/depguide/deptaskcorolar.png)  

        1. Agent Pool
        2. Get System Settings
        3. Get AKS Token
        4. Deploy General ARM Template
        5. Update Corolar Sql Database  

    * **IMP**  
    ![create-relpipe](/img/corolar21/depguide/deptaskimp.png)  

        1. Agent Pool
        2. Stop Site
        3. Deploy IMP
        4. Start Site  

    * **API Apps**  

    ![create-relpipe](/img/corolar21/depguide/deptaskapiapps.png)
        1. Agent Pool
        2. Stop Logging API
        3. Stop mllpmanagement
        4. Stop systemfunctions
        5. Stop servicebusmanagement
        6. Stop Codeset
        7. Stop transformation
        8. Stop hl7parser
        9. Stop hl7debatch
        10. Stop fhirtransform
        11. Stop ccda
        12. Stop exception
        13. Deploy Logging API
        14. Deploy mllpmanagement
        15. Deploy systemfunctions
        16. Deploy servicebusmanagement
        17. Deploy Codeset
        18. Deploy transformation
        19. Deploy hl7parser
        20. Deploy hl7debatch
        21. Deploy fhirtransform
        22. Deploy ccda
        23. Deploy exception
        24. Start Logging API
        25. Start mllpmanagement
        26. Start systemfunctions
        27. Start servicebusmanagement
        28. Start Codeset
        29. Start transformation
        30. Start hl7parser
        31. Start hl7debatch
        32. Start fhirtransform
        33. Start ccda
        34. Start exception  

    * In a similar fashion you will have to update CDR and CDR apps tasks if you are installing the Corolar Cloud CDR in your environment.

##### 3.3.1.2 Configuring Variables for Deployment
> Note, you will have to enter these variables once, and can copy the same pipeline with the variables for future deployment. Unless you want to change something  


1. Click on the 'Variables' tab next to the 'Tasks'  
![create-relpipe](/img/corolar21/depguide/depvariableimg1.png)  

2. Update and/or review the following variables to ensure it meets your requirements  

| Variable Name                 | Value                                                                    | Description                                                                                                                                                                                                                                                                                             | 
|-------------------------------|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| ADPrincipalId                 | App registration application id                                          | The app registration (service principal) <br> - If using AAD Authentication, then use app registration created in section 2.2.1 <br> - If using B2C Authentication, then use app registration created in section 2.2.2                                                                                  | 
| ADPrincipalSecret             | App registration secret key                                              | The app registration (service principal) secret key you generated for the app registration                                                                                                                                                                                                              | 
| AksNodeCount                  | Node count                                                               | Enter the number of AKS nodes that needs be deployed based on the forecast of many MLLP interfaces is expected to be deployed to an environment in the near future. 1 node will be good for about 15 MLLP interfaces.                                                                                   | 
| AksVnetIp                     | 192.168.0.0/24                                                           | Provide an IP range that this vnet/subnet should use so it won't overlap with any existing virtual network or the on-prem networks that the customer may have  <br> Include IP range in the form of CIDR schema, for example, 192.164.0.0/24                                                            | 
| ApiAccessToken                | 1234567ABcde                                                             | Choose a unique access token for accessing Corolar APIs                                                                                                                                                                                                                                                 | 
| ApplicationInsightsLocation   | canadacentral                                                            | The location where Application Insights should be deployed to. The location should always be in lower case without spaces                                                                                                                                                                               | 
| AuthenticationMode            | AAD or B2C                                                               | Customers can choose the authentication mode for users between Azure B2C and Azure AAD                                                                                                                                                                                                                  | 
| AzurePrincipalId              | App registration application ID                                          | The app registration (service principal) you created for the Corolar to interact with Azure, in section 2.1                                                                                                                                                                                             | 
| AzurePrincipalSecret          | App registration secret                                                  | The app registration (service principal) secret key you generated in section 2.1.1                                                                                                                                                                                                                      | 
| AzureTenantName               | dapasoft.com                                                             | Customer’s domain name                                                                                                                                                                                                                                                                                  | 
| B2CSignInPolicyId             | App registration id                                                      | When using B2C authentication, enter B2C sign-in policy id, i.e., application ID for the application created under Azure AD B2C.                                                                                                                                                                        | 
| B2CTenant                     | corolarcloudb2c.onmicrosoft.com                                          | The domain name for the B2C application                                                                                                                                                                                                                                                                 | 
| Company                       | Abbreviation for the Organization/Company Name, for example, Dapasoft    | Used as part of the naming convention for the resource group and other Corolar Cloud related resources. Should be lower case. <br> Remember that there is a character limitation hen creating resource group and resources name, so please use an abbreviation that has fewer characters ideally 3 or 4 | 
| CompanyName                   | Company/Organization's Name, for example, Dapasoft                       | Name of the organization/company                                                                                                                                                                                                                                                                        | 
| Environment                   | Dev/Stage/Prod                                                           | The environment where Corolar Cloud is being deployed to                                                                                                                                                                                                                                                | 
| ImpAdmins                     | List of users (e-mail addresses) who will be IMP admins, comma separated | E-mail addresses of the users who will be the IMP admins if the chosen AuthenticationMode is B2C.  <br> This is not a mandatory variable if the Authentication Mode is AAD, as the AAD admin will be the admin for the IMP by default.                                                                  | 
| LogAnalyticsWorkspaceLocation | canadacentral                                                            | The location where Log Analytics should be deployed to. The location should always be in lower case without spaces                                                                                                                                                                                      | 
| ResourceGroupLocation         | canadacentral                                                            | The location where Resource Group should be deployed to. The location should always be specified in lower case without spaces                                                                                                                                                                           | 
| ResourceGroupName             | Name of the resource group                                               | Customers can enter their preferred name for the resource group that will be created for the deployment of Corolar system. <br> Or choose to enter an existing resource group name if they prefer.                                                                                                      | 
| SqlServerAdminPassword        | password for accessing sql server                                        | Choose a password for the Sql server that will be deployed as part of Corolar Cloud                                                                                                                                                                                                                     | 
| SqlServerAdminUsername        | username for accessing sql server                                        | Choose a username for the Sql server that will be deployed as part of Corolar Cloud                                                                                                                                                                                                                     |

## 4. Deploying Corolar Cloud
Once variables are reviewed and updated as necessary, you can proceed with clicking on 'Create', at the bottom of the pop-up  

1. Upon clicking 'Create' you would see the pipeline and if you had chosen automatic deployment, then the stages would begin deploying automatically. The initial status of the stages will be 'Not Deployed' and would proceed to In Progress and then succeeded or failed.  
![create-relpipe](/img/corolar21/depguide/deployingimg1.png)  

2. If you have chosen manual deployment, you should be able to select 'Deploy' option under each of the stage as shown below. You should be able to see the status similar to the automatic deployment 

3. If any of the stages has failed during deployment, you could click on the failed stage and see the list of components that were part of the deployment for that stage and status of each of those components  
![create-relpipe](/img/corolar21/depguide/deployingimg3.png)  

4. Clicking on the components on this page will bring up the PowerShell script for the component that was run, which could help you further diagnose the issue  

5. Once the issue is resolved or if you want to re-deploy a stage over again, then you could select the re-deploy option that you will when hovering over a stage in the release pipeline