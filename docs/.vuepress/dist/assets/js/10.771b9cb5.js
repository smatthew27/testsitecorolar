(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{192:function(e,t,r){"use strict";r.r(t);var i=r(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-overview"}},[e._v("1. Overview")])]),r("li",[r("a",{attrs:{href:"#_2-service-principal"}},[e._v("2. Service Principal")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-1-service-principal-for-azure"}},[e._v("2.1 Service principal for Azure")])]),r("li",[r("a",{attrs:{href:"#_2-2-service-principal-for-authentication"}},[e._v("2.2 Service principal for Authentication")])])])]),r("li",[r("a",{attrs:{href:"#_3-creating-the-release-pipeline"}},[e._v("3 Creating the release pipeline")]),r("ul",[r("li",[r("a",{attrs:{href:"#_3-1-create-an-organization"}},[e._v("3.1 Create an organization")])]),r("li",[r("a",{attrs:{href:"#_3-2-create-a-project"}},[e._v("3.2 Create a project")])]),r("li",[r("a",{attrs:{href:"#_3-3-create-release-pipeline"}},[e._v("3.3 Create release pipeline")])])])]),r("li",[r("a",{attrs:{href:"#_4-deploying-corolar-cloud"}},[e._v("4. Deploying Corolar Cloud")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"_1-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-overview","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Overview")]),e._v(" "),r("p",[e._v("This document provides instructions for deploying Corolar Cloud v2.1. We will be leveraging the Azure DevOps platform for creating a release pipeline that will deploy the Corolar Cloud system. For more general information on Azure DevOps, see "),r("a",{attrs:{href:"https://azure.microsoft.com/en-ca/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[r("span",{staticStyle:{color:"blue"}},[r("u",[e._v("Microsoft website")])]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"_2-service-principal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-service-principal","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Service Principal")]),e._v(" "),r("p",[e._v("Beginning version 2.1, Corolar Cloud will enable users to use two service principals, one with delegated permission for user authentication purpose, and the other with contributor level access for used by Corolar's Interface Management Portal to read the resource groups and the resources within them for the purpose of adopting resource groups, onboarding interfaces, etc.")]),e._v(" "),r("h3",{attrs:{id:"_2-1-service-principal-for-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-service-principal-for-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 Service principal for Azure")]),e._v(" "),r("h4",{attrs:{id:"_2-1-1-creating-app-registration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-creating-app-registration","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1.1 Creating app registration")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("You can create service principals either by navigating to Azure Active Directory in the Azure portal and then selecting 'App registrations' from the list of options available on the left"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg1.png",alt:"screenshot of app registration option1"}})])]),e._v(" "),r("li",[r("p",[e._v("Or by searching with keyword app registration in the search box on the top"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg2.png",alt:"screenshot of app registration option2"}})])]),e._v(" "),r("li",[r("p",[e._v("Click on the '+ New application registration' option at the top")]),e._v(" "),r("ul",[r("li",[e._v("In the Register an application page enter the following details and click 'Register' at the bottom of the page")]),e._v(" "),r("li",[e._v("Name for the service principal (app registration) you are creating")]),e._v(" "),r("li",[e._v("Leave the default Supported account type as an organizational directory only in your subscription, or select the one appropriate to  you"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg3.png",alt:"screenshot of new app registration"}})])])]),e._v(" "),r("li",[r("p",[e._v("Enter a Redirect URI as https://localhost.com"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg4.png",alt:"screenshot of new app registration config 1"}})])]),e._v(" "),r("li",[r("p",[e._v("Now head back to the app registration you created, and then from the options on the left select the 'Certificates & secrets' from the left side pane, and then '+ New client secret"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg5.png",alt:"screenshot of app registration creation"}})])]),e._v(" "),r("li",[r("p",[e._v("In the Add a client secret window, Enter a description (name) for the key you are about to generate, and select one of the options from 'Expires' (preferably Never), and then click 'Add'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg6.png",alt:"aad-appreg"}})])]),e._v(" "),r("li",[r("p",[e._v("You will see the key you just created under the 'Client Secrets' section, copy the string in the 'VALUE' column to your preferred editor, because you will not be able to retrieve this once you close/move out of this blade"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depimg7.png",alt:"aad-appreg"}})])])]),e._v(" "),r("h4",{attrs:{id:"_2-1-2-granting-access-to-the-app-registration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-granting-access-to-the-app-registration","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1.2 Granting access to the app registration")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Now to provide Contributor access to this app registration (service principal), navigate to the 'Subscriptions' option in the Azure portal, and click on the relevant subscription where Corolar will be deployed"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/permissionimg1.png",alt:"aad-permissions"}})])]),e._v(" "),r("li",[r("p",[e._v("From the left side pane select 'Access Control (IAM)'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/permissionimg2.png",alt:"aad-permissions"}})])]),e._v(" "),r("li",[r("p",[e._v("Then click on the 'Add' button in the 'Add a role assignment' tile. Note, the Add button in the 'Add a role assignment' tile will be open only when you are an Azure Active Directory admin or the owner of the subscription"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/permissionimg3.png",alt:"aad-permissions"}})]),e._v(" "),r("ul",[r("li",[e._v("Find the app registration you created, and then provide Contributor access to the app registration"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/permissionimg4.png",alt:"aad-permissions"}})])]),e._v(" "),r("blockquote",[r("p",[e._v("Note, upon saving the role assignment, if you are the administrator/owner of the subscription the role assignment should take effect immediately. If not, then the appropriate administrator or owner should grant the permissions")])])])]),e._v(" "),r("h3",{attrs:{id:"_2-2-service-principal-for-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-service-principal-for-authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 Service principal for Authentication")]),e._v(" "),r("p",[e._v("This app registration (service principal) will be used for the purpose of authentication. This particular app registration will only have delegated access for authenticating users when they are singing into the Interface Management Portal")]),e._v(" "),r("h4",{attrs:{id:"_2-2-1-creating-app-registration-for-aad-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-creating-app-registration-for-aad-authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2.1 Creating app registration for AAD Authentication")]),e._v(" "),r("p",[e._v("Follow the steps from section 2.1.1 to create the app registration for AAD authentication. If you are intending to use B2C authentication method, then skip this section and go to section 2.3.")]),e._v(" "),r("p",[r("strong",[e._v("Providing access for app registration")]),r("br"),e._v("\nWe will be providing delegated level permission to this app registration so it can authenticate users.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to the app registration you just created for AD authentication purpose"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg1.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("From the options available in the left-side panel select 'API Permissions', and then click on '+ Add a permission'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg2.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("You will see User.Read with Delegated type for sign-in already available. We need to add a delegated permission reading all users' basic profile. So, in the API permissions blade that opened up select Microsoft Graph from the options available"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg3.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("Then select 'Delegated permissions' in the following screen"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg4.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("Once you click the 'Delegated permissions' option, you will see 'Select permissions section at the bottom, search and select the 'User.ReadBasic.All' and 'User.Read' permissions under User."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg5.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("Once checked, click on the 'Add permissions' button at the bottom of the same blade"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg6.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("Once done, go to the 'Authentication' option from the left side pane of the app registration"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg7.png",alt:"aad-access"}})])]),e._v(" "),r("li",[r("p",[e._v("In the Authentication blade, select the option 'ID tokens' under the 'Implicit grant' section as shown in the image below, and then click 'Save'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/accessimg8.png",alt:"aad-access"}})])])]),e._v(" "),r("h4",{attrs:{id:"_2-2-2-creating-app-registration-for-b2c-authentication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-creating-app-registration-for-b2c-authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2.2 Creating app registration for B2C Authentication")]),e._v(" "),r("p",[e._v("If users choose to use B2C authentication method, then navigate to the B2C tenant in the Azure Portal, and create an app registration (service principal) following the steps in section 2.1.1 and provide permissions as mentioned in section 2.2.1. Users can also set up the B2C authentication for authenticating users against the users' Amazon or Google accounts, to do so follow the steps below")]),e._v(" "),r("p",[r("strong",[e._v("Creating B2C User Flow")]),r("br"),e._v("\nUser flows define the experience for the users signing up and signing into your application. To set up")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("In  your B2C tenant, find Azure AD B2C service using the search box and select the same")])]),e._v(" "),r("li",[r("p",[e._v("Click on User Flows (policies) from the options available on the left panel"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/b2cimg1.png",alt:"b2c-config"}})])]),e._v(" "),r("li",[r("p",[e._v("Click on the New user flow option, and select sign up and sign in option"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/b2cimg2.png",alt:"b2c-config"}})])]),e._v(" "),r("li",[r("p",[e._v("Enter the following details")]),e._v(" "),r("ul",[r("li",[e._v("Name - a name for your user flow")]),e._v(" "),r("li",[e._v("Identity providers - select one from the available options")]),e._v(" "),r("li",[e._v("Multifactor authentication - enable or disable")]),e._v(" "),r("li",[e._v("user attributes and claims - you can leave this blank")]),e._v(" "),r("li",[e._v("and hit create"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/b2cimg3.png",alt:"b2c-config"}})])])]),e._v(" "),r("li",[r("p",[e._v("Once created, go to the Application claims from the available options, you will see Identity Provider already checked, so go ahead and check the following items as well and then save")]),e._v(" "),r("ul",[r("li",[e._v("Email Addresses")]),e._v(" "),r("li",[e._v("Given Name")]),e._v(" "),r("li",[e._v("Surname")]),e._v(" "),r("li",[e._v("User's Object ID"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/b2cimg4.png",alt:"b2c-config"}})])])])]),e._v(" "),r("p",[r("strong",[e._v("Authenticating against Google")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to Google developer portal and create a new Google Sign-in for websites project")])]),e._v(" "),r("li",[r("p",[e._v("Configure the project for authenticating users of IMP"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/googleauthimg1.png",alt:"google-auth"}})])])]),e._v(" "),r("p",[r("strong",[e._v("Authenticating against Amazon")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Sign into Amazon developer portal and navigate to Security Profile Management")])]),e._v(" "),r("li",[r("p",[e._v("In the Security Profile Management, select the tab Web Settings and enter the following details"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/amazonauthimg1.png",alt:"amazon-auth"}})])])]),e._v(" "),r("p",[e._v("Refer to the guide here to learn how users should sign up when logging into IMP for the first time if you are using the B2C authentication.")]),e._v(" "),r("h2",{attrs:{id:"_3-creating-the-release-pipeline"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-creating-the-release-pipeline","aria-hidden":"true"}},[e._v("#")]),e._v(" 3 Creating the release pipeline")]),e._v(" "),r("p",[e._v("Before creating the release pipeline we have to create an Organization and an associated Project in the Azure DevOps platform.")]),e._v(" "),r("h3",{attrs:{id:"_3-1-create-an-organization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-create-an-organization","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 Create an organization")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("To create an Organization, navigate to Azure DevOps portal and sign in with your Azure/Microsoft credentials")])]),e._v(" "),r("li",[r("p",[e._v("Once signed in, from the left-hand side bottom select the '+ New organization' option"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/createrelpipeimg1.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("In the following pop-up enter a name for your organization and select the location you want to host your projects in, and then click continue"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/createrelpipeimg2.png",alt:"create-relpipe"}})])])]),e._v(" "),r("h3",{attrs:{id:"_3-2-create-a-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-create-a-project","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2 Create a project")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Once the Organization is created, you will see the page with options for creating a new Project to get started"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/createrelprojimg1.png",alt:"create-relpipe"}}),r("br"),e._v("\nOr you could create a project by clicking on '+ Create project' from the Organization page, if you have moved away earlier after creating the organization"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/createrelprojimg2.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Enter a name for your project like 'Corolar Cloud, select the 'Private' option below to restrict public user access to the project, and then click 'Create'")])])]),e._v(" "),r("h4",{attrs:{id:"_3-2-1-connecting-the-project-to-azure-subscription"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-connecting-the-project-to-azure-subscription","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.1 Connecting the project to Azure subscription")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Click on the 'Project settings' option from the left-hand side bottom"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg1.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("In the Project settings page, select the 'Service connections' option under 'Pipelines' from the left side"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg2.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Now, click on '+ New service connection' and then select the Azure Resource Manager option, as we Corolar components are deployed using ARM template"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg3.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("From the pop-up, select the 'Service Principal Authentication' radio button, and then click on the 'use the full version of the service connection dialog' in the popup"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg4a.png",alt:"create-relpipe"}})])])]),e._v(" "),r("p",[e._v("once clicked, you will see the following form"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg4b.png",alt:"create-relpipe"}})]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[r("p",[e._v("In the form,")]),e._v(" "),r("ul",[r("li",[e._v("Connection name – Should be a name based on the subscription it connects to, ex: 'corolar cloud-dev'")]),e._v(" "),r("li",[e._v("Environment – Select AzureCloud from dropdown")]),e._v(" "),r("li",[e._v("Scope level – Leave Subscription selected as is")]),e._v(" "),r("li",[e._v("Subscription Id – Select the appropriate subscription from the dropdown")]),e._v(" "),r("li",[e._v("Service principal client id – Application id of the app registration you created"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg5e.png",alt:"create-relpipe"}})]),e._v(" "),r("li",[e._v("Service principal key – Password that you saved from step 2.1")])])]),e._v(" "),r("li",[r("p",[e._v("Then, click on the 'Verify connection', once verified click on 'Ok'. If you encounter any error, please review the values you have entered and try again. We suggest that you keep the 'Allow all pipelines to use this connection' option at the bottom, checked and click Ok."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/projectconnectimg6.png",alt:"create-relpipe"}})])])]),e._v(" "),r("h3",{attrs:{id:"_3-3-create-release-pipeline"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-create-release-pipeline","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 Create release pipeline")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("In the Azure DevOps portal, from the left, select 'Pipelines', then select 'Releases' and then click 'New pipeline'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg1.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("You will see following window on the right side, from the top click on the 'Empty job'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg2.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Enter a stage name and then click 'Save' from the top"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg3.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Once you click on save, you will see the following pop-up to select folder, for now leave the folder as ''"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg4.png",alt:"create-relpipe"}})])])]),e._v(" "),r("blockquote",[r("p",[e._v("Note, this is because you will be able to create folders to organize different release pipelines only after creating the first pipeline")])]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[r("p",[e._v("Now click on the 'Releases' option from the left side, you could see that you now have the ability to create a folder there. You could use that option to create a folder to organize your release pipeline if you want to."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg5.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Now select '+ New' and then select 'Import release pipeline'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg6.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Use the 'Browse…' option and select the Corolar Cloud v2.0 release pipeline (JSON) file you received from us and then click 'Ok'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg7.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("You have now successfully imported the Corolar Cloud v2.0 release pipeline"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg8.png",alt:"create-relpipe"}})])])]),e._v(" "),r("blockquote",[r("p",[e._v("Note: You can go ahead and delete CDR and CDR App components if you are not deploying Corolar")])]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Rename the release pipeline by clicking on the pencil icon at the top, the suggested naming convention is 'Corolar Cloud Deployment –V2– [[environment name]]'. Ex: Corolar Cloud Deployment-V2-QA"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/relpipelineimg9.png",alt:"create-relpipe"}})])]),e._v(" "),r("h4",{attrs:{id:"_3-3-1-configuring-release-pipeline"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-configuring-release-pipeline","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3.1 Configuring release pipeline")]),e._v(" "),r("h5",{attrs:{id:"_3-3-1-1-configuring-deployment-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-1-configuring-deployment-process","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3.1.1 Configuring deployment Process")]),e._v(" "),r("ol",[r("li",[e._v("Hover over the 'Tasks' option from the top, you will see a dropdown that lists the components you are about to deploy."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deptaskimg1.png",alt:"create-relpipe"}})])]),e._v(" "),r("blockquote",[r("p",[e._v("Note: you will not see CDR and CDR App tasks if you are not deploying CDR along with the Corolar cloud integration environment.")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("Now click on the AKS task from the dropdown and to configure the Agent Pool and Azure subscription information for deployment"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deptaskimg2.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("As a first step Click on 'Agent job' from below and under Agent pool choose Hosted VS2017 from the dropdown"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deptaskimg3.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Next go to Deploy AKS within the AKS task and select the Azure subscription where the Corolar Cloud environment should be deployed"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deptaskimg4.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("In a similar way select the Azure Subscription for the following items under the Agent Job")]),e._v(" "),r("ul",[r("li",[e._v("Deploy Load Balancer")]),e._v(" "),r("li",[e._v("Configure AKS")])])])]),e._v(" "),r("h5",{attrs:{id:"_3-3-1-2-configuring-other-deployment-tasks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-2-configuring-other-deployment-tasks","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3.1.2 Configuring other deployment tasks")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Once the AKS task is updated, we will move on to other tasks and update them in a similar manner")])]),e._v(" "),r("li",[r("p",[e._v("The list below shows the list of tasks and its configuration that needs be updated for deployment")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Corolar")]),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deptaskcorolar.png",alt:"create-relpipe"}})]),e._v(" "),r("ol",[r("li",[e._v("Agent Pool")]),e._v(" "),r("li",[e._v("Get System Settings")]),e._v(" "),r("li",[e._v("Get AKS Token")]),e._v(" "),r("li",[e._v("Deploy General ARM Template")]),e._v(" "),r("li",[e._v("Update Corolar Sql Database")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("IMP")]),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deptaskimp.png",alt:"create-relpipe"}})]),e._v(" "),r("ol",[r("li",[e._v("Agent Pool")]),e._v(" "),r("li",[e._v("Stop Site")]),e._v(" "),r("li",[e._v("Deploy IMP")]),e._v(" "),r("li",[e._v("Start Site")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("API Apps")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/corolar21/depguide/deptaskapiapps.png",alt:"create-relpipe"}}),e._v("\n1. Agent Pool\n2. Stop Logging API\n3. Stop mllpmanagement\n4. Stop systemfunctions\n5. Stop servicebusmanagement\n6. Stop Codeset\n7. Stop transformation\n8. Stop hl7parser\n9. Stop hl7debatch\n10. Stop fhirtransform\n11. Stop ccda\n12. Stop exception\n13. Deploy Logging API\n14. Deploy mllpmanagement\n15. Deploy systemfunctions\n16. Deploy servicebusmanagement\n17. Deploy Codeset\n18. Deploy transformation\n19. Deploy hl7parser\n20. Deploy hl7debatch\n21. Deploy fhirtransform\n22. Deploy ccda\n23. Deploy exception\n24. Start Logging API\n25. Start mllpmanagement\n26. Start systemfunctions\n27. Start servicebusmanagement\n28. Start Codeset\n29. Start transformation\n30. Start hl7parser\n31. Start hl7debatch\n32. Start fhirtransform\n33. Start ccda\n34. Start exception")]),e._v(" "),r("ul",[r("li",[e._v("In a similar fashion you will have to update CDR and CDR apps tasks if you are installing the Corolar Cloud CDR in your environment.")])])])]),e._v(" "),r("h5",{attrs:{id:"_3-3-1-2-configuring-variables-for-deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-2-configuring-variables-for-deployment","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3.1.2 Configuring Variables for Deployment")]),e._v(" "),r("blockquote",[r("p",[e._v("Note, you will have to enter these variables once, and can copy the same pipeline with the variables for future deployment. Unless you want to change something")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Click on the 'Variables' tab next to the 'Tasks'"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/depvariableimg1.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Update and/or review the following variables to ensure it meets your requirements")])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Variable Name")]),e._v(" "),r("th",[e._v("Value")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("ADPrincipalId")]),e._v(" "),r("td",[e._v("App registration application id")]),e._v(" "),r("td",[e._v("The app registration (service principal) "),r("br"),e._v(" - If using AAD Authentication, then use app registration created in section 2.2.1 "),r("br"),e._v(" - If using B2C Authentication, then use app registration created in section 2.2.2")])]),e._v(" "),r("tr",[r("td",[e._v("ADPrincipalSecret")]),e._v(" "),r("td",[e._v("App registration secret key")]),e._v(" "),r("td",[e._v("The app registration (service principal) secret key you generated for the app registration")])]),e._v(" "),r("tr",[r("td",[e._v("AksNodeCount")]),e._v(" "),r("td",[e._v("Node count")]),e._v(" "),r("td",[e._v("Enter the number of AKS nodes that needs be deployed based on the forecast of many MLLP interfaces is expected to be deployed to an environment in the near future. 1 node will be good for about 15 MLLP interfaces.")])]),e._v(" "),r("tr",[r("td",[e._v("AksVnetIp")]),e._v(" "),r("td",[e._v("192.168.0.0/24")]),e._v(" "),r("td",[e._v("Provide an IP range that this vnet/subnet should use so it won't overlap with any existing virtual network or the on-prem networks that the customer may have  "),r("br"),e._v(" Include IP range in the form of CIDR schema, for example, 192.164.0.0/24")])]),e._v(" "),r("tr",[r("td",[e._v("ApiAccessToken")]),e._v(" "),r("td",[e._v("1234567ABcde")]),e._v(" "),r("td",[e._v("Choose a unique access token for accessing Corolar APIs")])]),e._v(" "),r("tr",[r("td",[e._v("ApplicationInsightsLocation")]),e._v(" "),r("td",[e._v("canadacentral")]),e._v(" "),r("td",[e._v("The location where Application Insights should be deployed to. The location should always be in lower case without spaces")])]),e._v(" "),r("tr",[r("td",[e._v("AuthenticationMode")]),e._v(" "),r("td",[e._v("AAD or B2C")]),e._v(" "),r("td",[e._v("Customers can choose the authentication mode for users between Azure B2C and Azure AAD")])]),e._v(" "),r("tr",[r("td",[e._v("AzurePrincipalId")]),e._v(" "),r("td",[e._v("App registration application ID")]),e._v(" "),r("td",[e._v("The app registration (service principal) you created for the Corolar to interact with Azure, in section 2.1")])]),e._v(" "),r("tr",[r("td",[e._v("AzurePrincipalSecret")]),e._v(" "),r("td",[e._v("App registration secret")]),e._v(" "),r("td",[e._v("The app registration (service principal) secret key you generated in section 2.1.1")])]),e._v(" "),r("tr",[r("td",[e._v("AzureTenantName")]),e._v(" "),r("td",[e._v("dapasoft.com")]),e._v(" "),r("td",[e._v("Customer’s domain name")])]),e._v(" "),r("tr",[r("td",[e._v("B2CSignInPolicyId")]),e._v(" "),r("td",[e._v("App registration id")]),e._v(" "),r("td",[e._v("When using B2C authentication, enter B2C sign-in policy id, i.e., application ID for the application created under Azure AD B2C.")])]),e._v(" "),r("tr",[r("td",[e._v("B2CTenant")]),e._v(" "),r("td",[e._v("corolarcloudb2c.onmicrosoft.com")]),e._v(" "),r("td",[e._v("The domain name for the B2C application")])]),e._v(" "),r("tr",[r("td",[e._v("Company")]),e._v(" "),r("td",[e._v("Abbreviation for the Organization/Company Name, for example, Dapasoft")]),e._v(" "),r("td",[e._v("Used as part of the naming convention for the resource group and other Corolar Cloud related resources. Should be lower case. "),r("br"),e._v(" Remember that there is a character limitation hen creating resource group and resources name, so please use an abbreviation that has fewer characters ideally 3 or 4")])]),e._v(" "),r("tr",[r("td",[e._v("CompanyName")]),e._v(" "),r("td",[e._v("Company/Organization's Name, for example, Dapasoft")]),e._v(" "),r("td",[e._v("Name of the organization/company")])]),e._v(" "),r("tr",[r("td",[e._v("Environment")]),e._v(" "),r("td",[e._v("Dev/Stage/Prod")]),e._v(" "),r("td",[e._v("The environment where Corolar Cloud is being deployed to")])]),e._v(" "),r("tr",[r("td",[e._v("ImpAdmins")]),e._v(" "),r("td",[e._v("List of users (e-mail addresses) who will be IMP admins, comma separated")]),e._v(" "),r("td",[e._v("E-mail addresses of the users who will be the IMP admins if the chosen AuthenticationMode is B2C.  "),r("br"),e._v(" This is not a mandatory variable if the Authentication Mode is AAD, as the AAD admin will be the admin for the IMP by default.")])]),e._v(" "),r("tr",[r("td",[e._v("LogAnalyticsWorkspaceLocation")]),e._v(" "),r("td",[e._v("canadacentral")]),e._v(" "),r("td",[e._v("The location where Log Analytics should be deployed to. The location should always be in lower case without spaces")])]),e._v(" "),r("tr",[r("td",[e._v("ResourceGroupLocation")]),e._v(" "),r("td",[e._v("canadacentral")]),e._v(" "),r("td",[e._v("The location where Resource Group should be deployed to. The location should always be specified in lower case without spaces")])]),e._v(" "),r("tr",[r("td",[e._v("ResourceGroupName")]),e._v(" "),r("td",[e._v("Name of the resource group")]),e._v(" "),r("td",[e._v("Customers can enter their preferred name for the resource group that will be created for the deployment of Corolar system. "),r("br"),e._v(" Or choose to enter an existing resource group name if they prefer.")])]),e._v(" "),r("tr",[r("td",[e._v("SqlServerAdminPassword")]),e._v(" "),r("td",[e._v("password for accessing sql server")]),e._v(" "),r("td",[e._v("Choose a password for the Sql server that will be deployed as part of Corolar Cloud")])]),e._v(" "),r("tr",[r("td",[e._v("SqlServerAdminUsername")]),e._v(" "),r("td",[e._v("username for accessing sql server")]),e._v(" "),r("td",[e._v("Choose a username for the Sql server that will be deployed as part of Corolar Cloud")])])])]),e._v(" "),r("h2",{attrs:{id:"_4-deploying-corolar-cloud"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-deploying-corolar-cloud","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Deploying Corolar Cloud")]),e._v(" "),r("p",[e._v("Once variables are reviewed and updated as necessary, you can proceed with clicking on 'Create', at the bottom of the pop-up")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Upon clicking 'Create' you would see the pipeline and if you had chosen automatic deployment, then the stages would begin deploying automatically. The initial status of the stages will be 'Not Deployed' and would proceed to In Progress and then succeeded or failed."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deployingimg1.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("If you have chosen manual deployment, you should be able to select 'Deploy' option under each of the stage as shown below. You should be able to see the status similar to the automatic deployment")])]),e._v(" "),r("li",[r("p",[e._v("If any of the stages has failed during deployment, you could click on the failed stage and see the list of components that were part of the deployment for that stage and status of each of those components"),r("br"),e._v(" "),r("img",{attrs:{src:"/img/corolar21/depguide/deployingimg3.png",alt:"create-relpipe"}})])]),e._v(" "),r("li",[r("p",[e._v("Clicking on the components on this page will bring up the PowerShell script for the component that was run, which could help you further diagnose the issue")])]),e._v(" "),r("li",[r("p",[e._v("Once the issue is resolved or if you want to re-deploy a stage over again, then you could select the re-deploy option that you will when hovering over a stage in the release pipeline")])])])])},[],!1,null,null,null);t.default=a.exports}}]);