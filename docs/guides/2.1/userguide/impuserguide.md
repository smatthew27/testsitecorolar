---
title: IMP User Guide
---
# Intrface Management Portal User Guide
## Overview

The Corolar Interface Management Portal (IMP) is an Azure-based web application, deployed as part of the Corolar Cloud product. The IMP uses a role-based access control model backed on the Azure AD, and provides sufficiently provisioned users with access to a suite of Corolar tools and configuration modules.  
![IMP Homepage image](/img/corolar21/impuserguide/imphomepage.png)


The IMP has six core modules, which are available as clickable tiles on the IMP start page.  

| Module                  | Description                                                                                                                                 | 
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------| 
| Operations Dashboard | Used by operations users to check the health of deployed interfaces, search processed messages, and configure logging and alerting behavior | 
| Interface Management | Used to create, configure and deploy templated interface solutions                                                                          | 
| Configuration           | Manages user application permissions, Corolar resource groups, schedules for monitoring and non-IMP interface onboarding.                   | 
| Reports                 | Access to audit and operational reports                                                                                                     | 
| Alerts & Exceptions     | Allows users to search alerts and exceptions thrown by monitored interfaces.                                                                | 
| Codeset Management      | Allows user to manage mapping codesets for use in interface solutions.                                                                      |   

## Operations Dashboard
Operations Dashboard blade shows the interfaces (both LogicApp and MLLP adapter) that have been onboarded in the Corolar Cloud IMP. This space allows users to view and manage messages, exceptions, alerts, and monitor and logging settings specific to the interfaces.
::: tip The Corolar Cloud Interface Management Portal (IMP) currently works best in Chrome, Internet Explorer and Firefox browsers
:::  

> Interfaces listed in the Operations Dashboard are controlled by the Role-Based Access Control (RBAC) defined in the User Management section. So users will be able to view only the interfaces that they have permission to access.

### 2.1 Interfaces
![IMP Operations Dashboard image](/img/corolar21/impuserguide/impopsdashboard.png)  

The Operations Dashboard blade consists of the following columns, the users will be able to click on the interfaces list and access/view the messages, exceptions and configure monitor or logging settings  

![IMP Operations Dashboard image](/img/corolar21/impuserguide/impopsdashboard.png)  
| Column Name  | Description | 
| ------------- | ------------- |
| DIRECTION | This column indicates the type (Inbound, Outbound, and Process) of the interface <ul> <li> ![IMP inbound icon image](/img/corolar21/impuserguide/impinboundicon.png) Inbound - Interface that receives the messages from the source system </li> <li> ![IMP outbound icon image](/img/corolar21/impuserguide/impoutboundicon.png) Outbound - Interface that sends the messages to the destination system </li> <li> ![IMP Process icon image](/img/corolar21/impuserguide/impprocessicon.png) Process - Interface that processes (transforms, validates, etc.,) messages before sending to the destination system </li> </ul> |
| HEALTH STATUS | Displays the health of an interface <ul> <li> ![IMP Unhealthy icon image](/img/corolar21/impuserguide/impunhealthyicon.png) Unhealthy - The interface is unhealthy, below are the reasons why the health status will be set unhealthy </li> <ul> <li> Lack of messages in the interface </li> <li> The interface has received Invalid message </li> <li> Interface raised an exception (user set exception or system specific) </li> </ul> <li>![IMP Healthy icon image](/img/corolar21/impuserguide/imphealthyicon.png)  Healthy - The interface is up and running without any issues </li> <li> ![IMP Unconfigured icon image](/img/corolar21/impuserguide/impunconfiguredicon.png)  Un-configured - The monitor settings for the interface hasn't been configured </li> </ul>| 
| INTERFACE NAME | The name of the interface | 
| INTERFACE STATUS | Displays the status as to whether the interface <ul> <li> running - Interface is currently active and running </li> <li> stopped - Interface has been stopped/disabled currently </li> </ul> |
| LAST MSG RECEIVED | Displays and time of the last message received/sent/processed by the interface |

Upon clicking on an interface in the Operations Dashboard, a new blade specific to that 'Interface' will open up as shown below. This blade allows users to monitor and manage the interface's logging and monitoring settings, message flow, exceptions, alerts, and failed messages and review messages that were successfully received, processed or sent to the destination system.
![IMP Operations Dashboard Interface image](/img/corolar21/impuserguide/impopsdashboardinterface.png) 

### 2.2 Interface Operations
#### 2.2.1 Lack of Frequency
![IMP Lack of Frequency image](/img/corolar21/impuserguide/implackoffrequency.png)
Corolar Cloud will raise an alert when an interface has not received any message within the frequency mentioned. The Lack of Frequency tab for the interfaces shows the last message that was received and the last acknowledgment that was sent by the interface, the last 5 Lack of Frequency alert that was sent and the current configuration for raising Lack of Frequency alert. To update the configuration for the Lack of Frequency check, please review the 'Monitor Settings' section in this guide.
* When a Lack of Frequency alert is raised, you will see a ![IMP Unhealthy icon image](/img/corolar21/impuserguide/impunhealthyicon.png) icon in the particular tab, the health status for the interface in the Operations Dashboard will also be set with the same icon to indicate the same
* An alert (if set) will also be raised to the specified recipients if there are no messages within the specified duration
* Once the issue is diagnosed and message flow is restored or resumed, then the tab and the interface will be set as healthy automatically  
#### 2.2.2 Invalid Messages
![IMP Invalid Messages image](/img/corolar21/impuserguide/impinvalidmessages.png)  

The Invalid Message tab allows users to review the invalid message received by the interface. When an interface has received an invalid message,
* The interface will be set as unhealthy with the ![IMP Unhealthy icon image](/img/corolar21/impuserguide/impunhealthyicon.png) icon both in the Operations Dashboard, as well as in the Invalid Messages tab
* The invalid message will always have a status as 'Active' unless the user has reviewed and set it as 'Reviewed'
* The user can navigate to an Invalid Message tab and do a search based on date range to review all the invalid messages
* By default, the invalid messages with the status 'Active' will be sorted to show at the top
* Clicking on the specific Invalid Message, the user can then review the following details that will help them with diagnosing the issue
* 'Error Details' - which will show the exception/reason as to why the message failed (or considered as invalid)  
![IMP Unhealthy icon image](/img/corolar21/impuserguide/impinvaliderrordetail.png)  


* 'Original Message' - the actual message that the interface received  
![IMP Unhealthy icon image](/img/corolar21/impuserguide/impinvalidorigmsg.png)  

* Once the invalid messages have been reviewed and the issues have been resolved, the user can either mark the selected items as reviewed or all the searched items as reviewed  
![IMP Unhealthy icon image](/img/corolar21/impuserguide/impinvalidreviewed.png)  

* Selecting either of the options will set the messages (selected or all that is searched) with the status as 'Reviewed'.
>Note - When selecting all searched items to be marked as reviewed, depending on the volume of messages to be marked as reviewed the process in the background could take several minutes to complete. You will see a notification for the same upon clicking 'Searched Items'  

![IMP Unhealthy icon image](/img/corolar21/impuserguide/impmarkreviewconfirmation.png)  

* If there are no other 'Active' invalid messages, then the tab and the Operations Dashboard will be set with 'healthy' status for the interface

#### 2.2.3 Exceptions
![IMP Exceptions tab image](/img/corolar21/impuserguide/impexceptionstab.png)  

The Exceptions tab for an interface allows users to review any exceptions raised by the interface.
* The interface will be set as unhealthy with the ![IMP Unhealthy icon image](/img/corolar21/impuserguide/impunhealthyicon.png) icon in the Exceptions as well as in the Dashboard, when an alert is raised
* By default, the Exceptions tab will show All exceptions received for the current date. Users have the ability to search for exceptions by specific date range, event code and or severity
* After reviewing and/or addressing all the exceptions, users can select the 'Set Exception Status As Healthy' option in this tab to set the interface back to healthy status

#### 2.2.4 Alerts
![IMP Alerts tab image](/img/corolar21/impuserguide/impalertstab.png)  

The Alerts tab shows all the alerts that were raised or e-mailed to recipients for an interface in the event of Lack of Frequency, Exceptions or Invalid Messages.
* Users will receive an email every time an alert is raised if configured
* Users have the ability to search for alerts by date range, alert type or severity
* Users can view the details such as Email subject, whom the alert email was sent to, and other details related to the alert by clicking on an alert from the list  

![IMP Alerts details image](/img/corolar21/impuserguide/impalertsdetails.png)  

#### 2.2.5 Search Messages
![IMP Search Messages tab image](/img/corolar21/impuserguide/impsearchmessagestab.png)  

This tab allows users to search for and see messages that were processed by an interface. The messages can be logged and viewed only if the log settings for the interface has been turned on. Please see the 'Interface Management Options' section within this guide for details.
* By default, users will be shown messages that were processed for the current date. Users also have the ability to search for messages by specific message status, date range, and keyword

>Note, this tab will list both the failed and successful messages processed by an interface  

* Upon clicking on a message from the search result, the users have the ability to view - Original Message that was processed by the interface,  

![IMP Search Message Original Message’s image](/img/corolar21/impuserguide/impsearchmsgorigmsg.png)  

and the acknowledgment that was sent  

![IMP Search Message tabs ack image](/img/corolar21/impuserguide/impsearchmsgack.png)  
  
* Also, note that if the message logged is an HL7 Message, then users can use the Message Viewer capability in the IMP to view HL7 serialized message  
![IMP Search Message’s HL7 Message Viewer icon image](/img/corolar21/impuserguide/imphl7msgviewer.png)  

### 2.3 Interface Management Options
Users have options to configure the Message and Exception Logging, Monitoring and Alerts settings, as well as enable or disable an interface from the Operations Dashboard  
![IMP Log and Alerts Configuration](/img/corolar21/impuserguide/implogalertconfig.png)  

#### 2.3.1 Enabling and Disabling an Interface
Depending on the access level a user posses, the user will have the ability to enable and disable an interface, and configure the interface's logging and monitoring features by clicking on the respective buttons at the top of the interfaces blade

*  **Disable**  
The ![IMP disable icon image](/img/corolar21/impuserguide/impdisableicon.png)Disable button allows the user to stop an interface from processing any messages. This is helpful is in situations where a user might want to momentarily stop an interface to resolve an issue.

* **Enable**  
The ![IMP Enable icon image](/img/corolar21/impuserguide/impenableicon.png) Enable button allows the user to resume/start an interface to process messages.

#### 2.3.2 Log Settings
The log settings ![IMP Log Settings icon image](/img/corolar21/impuserguide/implogsettingsicon.png) allows users to configure the logging of messages, alerts, and exceptions to the database.  
![IMP Log Settings blade image](/img/corolar21/impuserguide/implogsetblade.png)  

Upon clicking on the Log Settings, a new blade with the following options will open up.
* Logging - This switch turns on or turns off the logging feature for the interface
* Message Retention Period (Days) - This field allows users to set the number days a message for a particular interface should be retained in the system depending on the need. Once the retention period is expired the messages are deleted from the system
    * Users can set up a maximum of 3650 days (10 years) as a retention period
* Alerts Retention Period (Days) - This field allows users to set the number of days the Alerts for a particular interface should be retained, after which the Alerts will be deleted from the system. The max retention period is the same as that of the Message retention
* Exception Retention (Days) - This field allows users to set the number of days the Exceptions for a particular interface should be retained, after which the Exceptions will be deleted from the system. The max retention period is the same as that of the Message's retention period

#### 2.3.3 Monitor Settings
##### 2.3.3.1 Turning On/Off Monitoring

The ![IMP Monitor Settings icon image](/img/corolar21/impuserguide/impmonitorsettingsicon.png) option allows the user to set up monitoring for the interfaces. Upon clicking on the Monitoring Settings, a new blade opens up as shown in the image below, and users can configure the following  
![IMP Monitor Settings blade image](/img/corolar21/impuserguide/impmonitorsetblade.png)  

* Monitoring - This switch turns on or turns off the monitoring feature for the interface
* Message Frequency - This option if turned on checks if there are at least one message received within the set frequency (in minutes)
    * Frequency (Min) - Users can Set up the expected time (in minutes)within which they expect at least one message to be received. If for example, the frequency is 30 mins, and no message has been received within that 30mins window, then the system would raise an alert for lack of frequency
    * Repeat - Turning this on would continue sending alerts for lack of frequency at an interval based on the frequency min set
    * Send Alert When Resolved - Turning this on would send an alert when a lack of frequency is resolved
* Invalid Message Alert - Turning this on would raise alert every time an invalid message is encountered by the interface
    * Every time - would configure the interface to raise/send an alert every time an invalid message is encountered
    * Frequency (Min) - After an invalid message an alert will be raised, and the interface will not send an alert for an invalid message until the specified duration has elapsed
* Send Alerts for Information - Raise alert for specific alert types
    * Notify on these alert types - Notify only for the selected alert types

##### 2.3.3.2 Adding Schedules to Monitoring
In the Monitor Settings window for an interface, you also have the option to add a schedule or delete a schedule. The monitor settings within each schedule will take priority during the time specified in the schedule. To add a schedule to an interface's  monitoring
1. Click on the Schedules on top of the Monitor Settings blade  
![IMP Monitoring Schedule icon image](/img/corolar21/impuserguide/impmonitorschedicon.png)  

2. In the Schedule blade, click '+ Add new record', then select a schedule from the dropdown and then click 'Update' to add the schedule to monitoring  
![IMP Monitoring Add new schedule image](/img/corolar21/impuserguide/impmonitoraddnewsched.png)  
>You will be able to see schedules in the dropdown only if you have created schedules from the Configuration blade in the IMP. To create a Schedule refer to the Configuration section of the Interface Management Portal user guide

3. Then click on the added schedule and then turn on the Monitoring for that schedule  
![IMP Monitoring save new schedule image](/img/corolar21/impuserguide/impmonitorschedsave.png)  

4. To delete an added schedule, go to the Schedules in the Monitor Settings, and then select the schedule you want to delete. In the Monitor Settings blade for that schedule, from the options on the top choose 'Delete' to delete a schedule  
![IMP Monitoring delete a schedule image](/img/corolar21/impuserguide/impmonitordeletesched.png)  

##### 2.3.3.3 Adding Recipients
This is a list of the Azure Active Directory User Groups that will receive alerts.
>Users not part of an Azure Active Directory Group will not be shown
1. To add a recipient, go to Monitor settings and then select Recipients from the blade  
![IMP Monitoring alert recipients image](/img/corolar21/impuserguide/impmonitorrecipients.png)

2. Click on '+ Add new record', then select the AAD Group from the dropdown, and then click Update.
![IMP Monitoring add new recipient image](/img/corolar21/impuserguide/impmonitoraddnewrecip.png)  

3. To delete a Recipient from getting alerted when there is a Lack of Frequency, Invalid Message or Exceptions, click on the AAD Group from the list in the Recipients window and then choose 'Delete' option next to it  
![IMP Monitoring delete a recipient image](/img/corolar21/impuserguide/impmonitordeleterecip.png)  

2.3.4 Info
The ![IMP info icon image](/img/corolar21/impuserguide/impinfoicon.png) option for an interface will show general information about an interface in a new blade. This information will vary based on whether an interface is a LogicApp interface or an MLLP interface.
1. If it's a LogicApp interface, users will see the following information  
![IMP LogicApp interface info image](/img/corolar21/impuserguide/implogicappinfo.png)  

    * Resource group - where the LogicApp exists
    * App Name - Name of the LogicApp
    * Status - Whether the LogicApp is running or stopped
    * Location - Location where the LogicApp is deployed to, would be the location of the resource group
    * Logging - Whether logging of messages and exceptions are enabled  
2. If it's an MLLP interface, users will see the following information  
![IMP MLLP interface info image](/img/corolar21/impuserguide/impmllpinfo.png)

## Configuration
Configuration Area consists of four sections: User Management, Adoption of Resource Group, Schedules for Monitoring Service and Interface Onboarding. Only Site Administrators have access to the Configuration Area.  
![IMP Configuration blade image](/img/corolar21/impuserguide/impconfiguration.png)  

### 3.1 User Group Management
Corolar Cloud IMP uses Role-Based Access Control (RBAC) to manage user permissions in the Interface Management Portal. IMP administrator(s) can assign different permissions to User Groups. The user group permission can be assigned either at the Resource Group level or at the individual interface level.  

IMP administrator can assign role privilege on the Resource Group level, which all individual interfaces under the resource group will inherit the role privileges. The Resource Group Level permission provides granular access control for all resources in the same Resource Group. The Resource Group Level also enables newly provisioned interfaces to be accessible to the user groups with access to the Resource Group without updating the permission. Alternatively, the IMP administrator can assign role privilege on the individual resource level. Simply set the role to None on the resource group and expand the individual resources. Then set the role for individual resources. If a user belongs to multiple user groups, then he/she will be granted the combined role privileges of the user groups.

#### 3.1.1 Adding/Managing User Group
>If the Interface Management Portal is being used for the first time after a new deployment, IMP admins will be the users (e-mail addresses) provided at the time of deployment in the release pipeline. Only IMP admins will have the ability to add or manage users and user groups and the respective permissions.
1. To create a new user group, navigate to User Group Management blade in the IMP  
![IMP User Group Management image](/img/corolar21/impuserguide/impusergroupmgmt.png)  

2. Users will see that the 'Administrators' group already existing in this blade, this group contains the e-mail addresses of the users who will are IMP admins, and this group is created while deploying Corolar Cloud. You can add users to this group if you decide to make them an IMP admin, however, be cautious and mindful of who has administrator access to the portal.  
![IMP User Group Mgmt.’s admin group image](/img/corolar21/impuserguide/impusergroupadmin.png)  

3. To create a User Group, click on the 'Add User Group' button on top of the User Group Management blade
![IMP User Group creation image](/img/corolar21/impuserguide/impusergroupcreate.png)  

4. In the New User Group blade that opens up, enter a name for the User Group you want to create and click 'Save'  
![IMP new user group image](/img/corolar21/impuserguide/impusergroupnewsave.png)  

5. The New User Group blade will automatically close when you hit save, go back to User Group Management blade and click on the new group you just created, you will now see new buttons on top of the new user group  
![IMP new user group creation image](/img/corolar21/impuserguide/impusergroupnewsaveclose.png)  

6. If you would want to update the User Group Name, you could just update right away in the User Group Name field and click on 'Save' to change the same. and If you wanted to delete the User Group, you could just click 'Delete' button on top of the user group you want to delete.  

7. The User Management button, allows you to add a list of users who needs to be part of the user group, and the Permissions button allows you to set up permissions for the User Group which we will cover in section 3.1.2 and 3.1.3 respectively.

#### 3.1.2 Adding/Managing Users

1. Click on the User Management button in the User Group to which the users should be added/included  
![IMP User Management image](/img/corolar21/impuserguide/impusermgmt.png)  

2. In the User Management blade that opens up, click on Add, which will open another blade to add the user. Enter the user's e-mail address and click save  
![IMP user management add new user image](/img/corolar21/impuserguide/impusermgmtaddnew.png)  

3. You will now see an entry in the User Management blade with the user you just added.  

4. To change/delete a user from the User Group, click on the user you want to delete in the User Management blade, and then select the user to be deleted. This will open up allowing you to either replace the entry with a new user's e-mail address or delete it using the 'Delete' button.  
![IMP User Management delete a user image](/img/corolar21/impuserguide/impusermgmtdeleteuser.png)  

#### 3.1.3 Assigning Permissions to User Group
::: tip Only IMP Admins will have the ability to assign permissions to the User Groups. Also note, the Administrators groups can never be deleted nor individual permissions based on resource or resource group can be applied, administrators can only add or delete users from this group.
:::  


1. In the User Group Management blade, click on the user group to which you want to assign permissions. In the user group blade that opens up, click on the Permissions button at the top  
![IMP User Group permissions image](/img/corolar21/impuserguide/impusergrouppermissions.png)

2. In the permissions blade, you will see the list of resource groups. The MLLP-Adapters group encompasses all the MLLP adapters you have created in this environment, the other resource groups are from your Azure subscription, that was adopted in the IMP via the Adoption blade.  
![IMP User Group permission management image](/img/corolar21/impuserguide/impusergroupmanageperm.png)

3. IMP administrators can either choose to provide access to the entire resource groups or choose to provide access to individual interfaces within the resource group. The User Groups level of access is determined by the 'Role' assigned to it. Following are the roles available for each resource groups or resources within them  
![IMP User Group resource permissions image](/img/corolar21/impuserguide/impusergroupresourcelevelperm.png)  

    - None - User has no permission to the resource
    - Observer - User is granted read-only privilege to the resource, including the following privileges:
        - View Log message and acknowledgment
        - View Message Trace Flow
        - Log Search
        - View Alerts & Exceptions for the resource
    - Elevated - User is granted full-access privilege to the resource, including enabling/disabling the interfaces

4. Once the appropriate role has been selected, click on the 'Save' button on the user group's blade  
![IMP User Group save permission image](/img/corolar21/impuserguide/impusergroupsaveperm.png) 

### 3.2 Adoption
Adoption in the Interface Management Portal (IMP) refers to the process of marking a Resource Group and its resources to be visible, therefore the resources within the resource groups could be managed via Corolar Cloud IMP. The Resource Group Adoption process helps users to isolate only the resource groups and resources that are of importance to the Corolar Cloud system, to simplify and to reduce the number of resource groups and resources visible within Corolar Cloud IMP.   

The resource group that has the necessary Corolar Cloud components and the resource group for LogicApp are adopted by default, but can be disabled if desired. 

>User Group permission control is also enforced via Resource Group Adoption. With the exception of Site Administrators, resources are not visible and cannot be accessed in IMP before they are adopted and associated with a role via User Management.

:::tip Remember to tag Resource Groups
Before adopting a resource group, make sure it has the tag following tag  

| Name                      | Value         | 
|---------------------------|---------------| 
| Dapasoft.CloudIntegration | ResourceGroup |
This would allow IMP to recognize Corolar specific resource group and would let the user adopt the same. For steps on how to add a tag to the resource group, refer  page.
:::  

  
**_To adopt a resource group_** 
1. The configuration in the Interface Management Portal (IMP) and then select Adoption  
![IMP Resource Group adoption image](/img/corolar21/impuserguide/imprgadoption.png)  
2. In the Adoption blade, you could use the ON or OFF switch to adopt or not adopt a resource group  
![IMP Resource Group adoption process image](/img/corolar21/impuserguide/imprgadoptionswitch.png)  

### 3.3 Schedules
Schedules are added so that the monitor settings within each schedule can take priority during the time specified. That is, if you choose not to monitor systems during non-business hours, you can set a schedule that will have the monitoring activated during business hours. The alerts/exceptions raised during non-business hours will be delivered to you on the following business day

#### 3.3.1 Add a schedule
1. Navigate to Configuration in Interface Management Portal (IMP), and then go to Schedules  
![IMP Schedules blade image](/img/corolar21/impuserguide/impschedulesblade.png)  

2. In the Schedules blade, click on 'Add' to add a new schedule  
![IMP add new schedule image](/img/corolar21/impuserguide/impschedulesaddnew.png)  

3. In the New Schedule blade, enter the following details and click Save  
![IMP add new schedules config image](/img/corolar21/impuserguide/impschedulesnewconfig.png)  
    1. Schedule Name - A name for the new Schedule you are creating
    2. Is Override - This option will have this schedule take prioritize over all other overlapping schedule where this might have been checked off
    3. Effective Time - Select a time window for the schedule, you can select either All Day which will have the monitor settings take priority 24 hours or have specific time like the working hours
    4. Time Zones - To indicate the time zone to follow for schedule
    5. Recurrence - You can either select daily if the schedule for the time window above should take effect 7 days a week or specific days each week like Monday through Friday
    6. Range of Recurrence - If there is a specific date range within which you want to have this schedule run you can use Specific Range and enter the to and from dates, or you can leave it indefinite to have the schedule indefinitely  

4. Upon clicking save, you will see a new schedule created in the Schedules blade.  
![IMP new schedule added image](/img/corolar21/impuserguide/impschedulesnewadded.png)  

#### 3.3.2 Edit a schedule
1. To edit a schedule, just simply click on a schedule in the Schedules blade, make necessary changes and then click Save to update the schedule  
![IMP edit a schedule image](/img/corolar21/impuserguide/impschedulesedit.png)  

#### 3.3.3 Delete a schedule
1. To delete a schedule, click on the schedule in the Schedules blade and then click the Delete button from the top  
![IMP delete a schedule image](/img/corolar21/impuserguide/impschedulesdelete.png)  

### 3.4 Interface Onboarding
The IMP will automatically recognize all LogicApps deployed to the adopted resource group. Users can use the Interface Onboarding blade to onboard these LogicApps into the IMP, so it's easier for management of the interface
#### 3.4.1 Onboarding LogicApp Interface
1. To onboard a LogicApp interface, navigate to Configuration and then select Interface Onboarding  
![IMP Interface Onboarding image](/img/corolar21/impuserguide/impinterfaceonboard.png)  

2. In the Interface Onboarding blade, you should see the list of all LogicApp interfaces that were created/deployed in the adopted resource group with the following columns
    1. Adapter - Name of the LogicApp
    2. Resource Group - Name of the resource group in which the LogicApp exists
    3. State - Allows users to either turn off, or turn on along with setting of direction for the LogicApp  
    ![IMP Interface Onboarding options image](/img/corolar21/impuserguide/impinterfaceonboardoptions.png)

3. To onboard a LogicApp, click on the drop down in the status column for your LogicApp, and in the dropdown select the direction for the LogicApp  
![IMP Interface Onboarding dropdown image](/img/corolar21/impuserguide/impinterfaceonboarddropdown.png)  

4. The direction of the LogicApp indicates to the user what type of interface it is, following are the directions you could choose from. Upon selecting a direction, the LogicApp interface will be onboarded and could be viewed from the Operations Dashboard of the IMP
    - Inbound - LogicApp Interface that receives the message from an upstream/source system
    - Outbound - LogicApp Interface that sends the message to a downstream/destination system
    - Process - LogicApp Interface that sits in between an Inbound or Outbound interface and does message processing such as transformation, property promotion, etc.,

#### 3.4.2 Disabling or Deleting a LogicApp Interface
1. To disable a logic app interface, simply navigate to the Interface Onboarding blade in the Configuration space, then select the LogicApp Interface you want to disable, and then choose 'Off' from the dropdown int he State column. This will automatically disable/stop the LogicApp.  
![IMP disable logic app interface image](/img/corolar21/impuserguide/impinterfaceonboarddisable.png)  

2. To delete a LogicApp you would have to go to the Azure Portal, and delete the LogicApp from the resource group it is deployed to.

3. Once deleted from Azure Portal, log back into IMP and navigate to the Interface Onboarding in the Configuration space  

4. You could now see in the State column of the Interface Onboarding blade that the LogicApp you deleted in Azure Portal has been turned to ![IMP unavailable interface icon](/img/corolar21/impuserguide/impunavailableicon.png) Unavailable, and that the 'Delete' button on the top is now active  
![IMP unavailable interface image](/img/corolar21/impuserguide/impinterfaceonboardunavail.png)  

5. Upon clicking Delete button, you will see two options  
![IMP interface deletion confirmation image](/img/corolar21/impuserguide/impinterfaceonboarddeleteconf.png)  
    1. Yes, delete all artifacts - would delete the messages, exceptions and alerts associated with the LogicApp interface
    2. No, delete only the logic app, keeping the logs and exceptions - would just delete the LogicApp namespace from the IMP and the associated messages, exceptions and alerts will exist in the database until it's retention date expires.

## Alerts & Exceptions
This page displays all the Alerts and Exceptions for all the interfaces, so that users can have consolidated view of all the alerts and exceptions received by interfaces. To navigate to the Alerts & Exceptions page click on the option in the home/landing page of the IMP or from the navigation bar left side  
![IMP Alerts and Exceptions option image](/img/corolar21/impuserguide/impalertsexceptions.png)  

### 4.1 Alerts
Alerts are raised for exceptions, and based on your configuration relevant users will be alerted every time an Exception is encountered by an interface
1. To access all the Alerts from the onboarded interfaces click on the Alerts option from the Alerts & Exceptions blade  
![IMP Alerts and Exceptions alert image](/img/corolar21/impuserguide/impalertsexceptions_alerts.png)  

2. In the Alerts blade you would have options to filter the result by following:
    - Tenant-name: You could filter the results based on Tenant-name associated with the IMP
    - Event Code: Exception Event Code for which the Alerts were raised  
    ![IMP Alerts and Exceptions alert details image](/img/corolar21/impuserguide/impalertsexceptions_alertsdetails.png)  

- Severity: Severity for which the alerts were raised  
![IMP Alerts and Exceptions alert severity image](/img/corolar21/impuserguide/impalertexceptions_alertsseverity.png)  


- Date Range: From and To date range between which the alerts were raised
![IMP Alerts and Exceptions search by date range image](/img/corolar21/impuserguide/impalertsexceptionsdaterange.png)  

3. Once you have entered relevant filter, you could click on search to filter the results  

4. You will find the following columns in the result of the Alerts blade
    - ALERT ID -  GUID of the alert raised
    - EVENT CODE - Event Code for the exception for which the alert was raised
    - ORIGIN - The name of the interface which raised the Exception and alerts was sent
    - DATE AND TIME - Date and Time when the alert was raised
    - SEVERITY - Severity of the exception raised

### 4.2. Exceptions
Exceptions are errors encountered 
1. To access all the Exceptions from the onboarded interfaces click on the Exceptions option from the Alerts & Exceptions page  
![IMP Exceptions options in Alerts and Exceptions image](/img/corolar21/impuserguide/impalertsexceptions_exceptions.png)  

2. You can filter the results by 
    - Tenant - if there are multiple tenant names associated with the resource group
    - Event Code - Event code for which the alert was raised
    - Severity - Severity of the exception for which the alert was raised
    - From and To (date range) - Date range for which the alerts was raised

3. You will find the following columns in the result of the Exceptions blade
    - EXCEPTION ID - GUID of the exception event raised
    - EVENT CODE - Event Code for which the exception was raised
    - ORIGIN - The name of the interface which raised the Exception
    - DATE AND TIME - Date and Time of the exception raised
    - SEVERITY - Severity of the exception raised

## Interface Management
The Interface Management blade in the IMP allows users to manage environment profiles, create and manage MLLP interfaces, manage schemas and artifacts related to interfaces.  

In the Interface Management blades, users can see the following four options
Profiles
1. MLLP Deployments
2. Release Management
3. Artifacts Management 

### 5.1 Profiles
The 'Profiles' section is a container that holds the references to a set of resources and configuration settings that can be used when provisioning an Interface. Typically, there will be one Interface Profile specified for each environment such as Dev, UAT, and Production.  
![IMP Profiles image](/img/corolar21/impuserguide/impintmgmtprofile.png)  

At the time of Deployment, a few default Profiles should have been created in the IMP. The following sections explain in further details on how to configure Interface Profiles. To create a Profile, an Azure Resource Group with a specific naming convention is required, and this usually created during the Deployment of Corolar instance. This Resource Group

1. Prior to creating a Profile in the IMP, we need to add the Corolar specific tag to the Resource Group that was created during deployment. Adding the tag would allow IMP to recognize the Corolar specific resource group.
2. To add a tag go to the resource group, head to Azure portal and find the resource group related to Corolar Cloud, and then click on the 'Tags' option from the menu on the left side  
![IMP Profiles resource group tagging image ](/img/corolar21/impuserguide/impprofilergtag.png)  

3. In the Tags section, add the Name as Dapasoft.CloudIntegration and select the value as 'Resource Group', and click save  
![Azure portal resource group tagging for IMP image](/img/corolar21/impuserguide/impprofilesazuretag.png)  

4. Now head to the Profiles under Interface Management in the IMP and click on the 'New' button from the top  

5. Create an Interface Profile, an Azure Resource Group with a specific naming convention is required and is a result of the onboarding process. This Resource Group contains all the deployed resources that are required to create an Interface. E.g.: Logging API App, Exception API App, Sequencer API App, Transformation API App, Service Bus API App. A web job associated with a Sequencer API App container prefix is required for order delivery templates.

### 5.2 MLLP Deployments
This section provides an overview of how to create and manage the MLLP adapters in the Interface Management Portal from the MLLP Deployments blade. The MLLP adapters support both one-way and two-way request response modes. The adapter has a listener interface that can detect the arrival of data on a socket and trigger an action as set by the user, whether it's parsing the HL7 messages or triggering a transformation map to run.

#### 5.2.1 Creating MLLP-In adapter
1. Log into the Corolar Cloud IMP with the Administrator privilege. From the Home page of the Portal, access Interface Management tile.  

2. Click on the Interface Management tile to navigate further and reach MLLP Deployments  
![IMP MLL Deployments option image](/img/corolar21/impuserguide/impmllpdeployments.png)  


3. On the MLLP Deployments blade, clicking on the New MLLP-In  
![IMP MLLP adapter image](/img/corolar21/impuserguide/impnewmllpadapter.png)  


4. Refer to the Field Listings below for the information on values for the fields displayed  
![IMP create new MLLP-In adapter image](/img/corolar21/impuserguide/mllpadaptercreatenewin.png)  

> The system will generate a 'PORT' number for the MLLP-In adapter, and if you choose to use a different 'PORT' number you should be able to update the same from the MLLP adapter creation blade. However, if the entered port is already in use by another MLLP adapter then the New Adapter creation window will throw an error as shown below ![IMP new MLLP adapter error](/img/corolar21/impuserguide/impmllpadapternewerror.png)  


5. Once you configure all the settings and press Deploy button in New Adapter blade, the new MLLP adapter will initially be created with the status as![IMP draft icon for MLLP adapters](/img/corolar21/impuserguide/impmllpdrafticon.png)  (Draft) in the Deploy Status column  
![IMP MLLP adapter in draft status image](/img/corolar21/impuserguide/impmllpadapterdraftstatus.png)  

6. Once successfully deployed, the 'Deploy Status' column for the adapter will be changed to ![IMP MLLP adapter successfully deployed icon image](/img/corolar21/impuserguide/impmllpdeployedicon.png) (Deployment Success), which means the MLLP adapter is now up and running ![IMP MLLP adapter successfully deployed image](/img/corolar21/impuserguide/impmllpsuccessfullydeployed.png)  

**_Forwarding message to an external system for ack_**  
In situations where users expect an external system to send back an acknowledge, the 'Forward Message' option in the MLLP-In adapter can help. This feature allows the MLLP-In adapter to directly connect with the external system to forward the message and receive the Ack. To set this up,
1. In the MLLP-In creation blade, set the 'Forward Message (For Receiving Ack)' to 'Yes'  
![IMP MLLP External Ack feature image](/img/corolar21/impuserguide/impmllpextack.png)  

2. Once it is set to 'Yes' you will several options/fields appear beneath that as shown in the image below  
![IMP disable logic app interface image](/img/corolar21/impuserguide/impmllpextackconfig.png)  

3. Below is the description of the new fields you will see when 'Forward Message (For Receiving Ack)' is set to 'Yes', and you can configure them based on your requirements
    - Destination System Protocol - Defines the external system's protocol for receiving the message and sending ack
    - Depending on the Destination System Protocol, you will either see a Destination System Endpoint or Destination URL
        * Destination System Endpoint - IP address for the external system
        * Destination System URL - URL for the external system
    - Response Timeout For Ack (In Milliseconds) - Timeout in milliseconds while awaiting ack from the external system
    - Disable Parsing -
        * Setting to 'Yes' disables the validation of messages against the schemas, i.e., messages will be passed to the external system as-is without validating against the schema
        * Setting to 'No' will parse messages against schema as usual

#### 5.2.2 Creating MLLP-Out adapter
1. On the MLLP Deployments blade, click on the New MLLP-Out button

2. Follow the steps similar to creation of MLLP-In adapter, and refer to the Field Listingssectionbelow for the information on values for the fields displayed  
![IMP create new MLLP-Out image](/img/corolar21/impuserguide/impmllpcreatenewout.png)  

3. Once you have configured all the settings, and press Deploy button in New Adapter blade, the new MLLP adapter will initially be created with the status as ![IMP MLLP draft status icon image](/img/corolar21/impuserguide/impmllpdrafticon.png) (Draft) in the Deploy Status column  

4. Once successfully deployed, the 'Deploy Status' column for the adapter will be changed to ![IMP MLLP successfully deployed icon image](/img/corolar21/impuserguide/impmllpdeployedicon.png) (Deployment Success), which means the MLLP adapter is now up and running

#### 5.2.3 Edit MLLP adapter
You can also update configuration parameters of a deployed MLLP-In or MLLP-Out adapter using the 'Interface Management' >> "MLLP Deployments" blade
1. To edit an MLLP adapter, click on the particular adapter you wish to edit  
![IMP MLLP-In adapter config edit image](/img/corolar21/impuserguide/impmllpinedit.png)  

2. Click on the Disable button to disable the adapter before you make any changes. If you do not disable the adapter, then you will see the following message when clicking 'Save' to redeploy the adapter  
![IMP MLLP running warning image](/img/corolar21/impuserguide/impmllprunningwarning.png)  

3. Once you have updated the configuration, click on Save button at the top, which would re-deploy the MLLP adapter automatically with the new configuration.  
![IMP saving edited config image](/img/corolar21/impuserguide/impmllpsaveeditedconfig.png)  

>You will not be able to update/edit the adapter's name. If you would want to change the name of the adapter for the same workflow, then you would have to create a new adapter and delete the previous/incorrect adapter.  

4. Upon clicking 'Save' the adapter's Deploy Status will be changed to ![IMP MLLP draft status image](/img/corolar21/impuserguide/impmllpdrafticon.png) (Draft) and once successfully deployed in the background the status will change to ![IMP MLLP deployed status image](/img/corolar21/impuserguide/impmllpdeployedicon.png) (Deploy Successful)  

5. Once the redeployment is successful, click on the Enable button to start the MLLP adapter  
![IMP MLLP enable option image](/img/corolar21/impuserguide/impmllpenableoption.png)  


#### 5.2.4 Enabling/Disabling MLLP adapter
1. To Disable an MLLP adapter, in the MLLP Deployments blade select the adapter you would want to disable  
![IMP disable logic app interface image](/img/corolar21/impuserguide/impmllpdisableoption.png)  

2. Once the adapter is Disabled, you will be able to see Enable option active which you could click to Enable the adapter again  
![IMP MLLP enable option image](/img/corolar21/impuserguide/impmllpdisableoption.png)  

#### 5.2.5 Delete MLLP adapter
You can delete a deployed MLLP-In or MLLP-Out adapter using the 'Interface Management'  --> "MLLP Deployments" blade
1. Before deleting an MLLP-In or MLLP-Out adapter, disable the adapter by clicking on the ![IMP Disable option image](/img/corolar21/impuserguide/impdisableicon.png) icon  
![IMP MLLP enable option image](/img/corolar21/impuserguide/impmllpdisableoption.png)  

2. Once the MLLP adapter is disabled, the Delete and Enable option will become available, you could click on the ![IMP delete icon image](/img/corolar21/impuserguide/impdeleteicon.png) icon   
![IMP MLLP adapter delete option image](/img/corolar21/impuserguide/impmllpadapterdelete.png)  

3. A confirmation popup with two options will be displayed.  
![IMP MLLP adapter deletion confirmation image](/img/corolar21/impuserguide/impmllpdeleteconfirm.png)  
    - Selecting the 'Yes, delete all artifacts' option will delete the MLLP adapter and all its corresponding logs and exceptions logged previously
    - If you select the 'No, delete only the adapter, keeping the logs and exceptions.' option, then the MLLP adapter will be deleted without deleting its corresponding logs and exceptions logged previously

>If you had used the latter option when deleting the MLLP adapter, the preserved logs and exceptions will be carried on to the new MLLP adapter if created with the same name as the deleted one.

#### 5.2.6 Export and Import MLLP Adapters
You can Export the existing MLLP adapters configuration as a JSON file from one environment and Import the same in another environment. This features enables an easy MLLP adapter promotion life-cycle between environments.

>Note: At this time, users will not be able to export configuration for specific MLLP adapters, they would have to export the configuration of all MLLP adapters in an environment. However, when importing the configuration file (for MLLP adapters), the user will have the option to either download all the MLLP adapters or only the new MLLP adapters (MLLP adapters that are not already imported in the new environment). If the user decided to import all MLLP adapters, then if there are any existing MLLP adapters in the new environment same as the one in the configuration file, then the existing MLLP adapter will be re-deployed.  


**_Exporting MLLP Adapters_**
1. To export the MLLP adapters in an environment, navigate to the Interface Management, and MLLP Deployments blade, and on the top, you will click on the 'Download' option  
![IMP MLLP adapters export option image](/img/corolar21/impuserguide/impmllpexportoption.png)  


2. A JSON file will be downloaded to your preferred downloads folder per the browser, and you should be able to open the file in your favorite editor, should you decide to change the configurations before importing  
![IMP downloaded MLLP configuration image](/img/corolar21/impuserguide/impmllpexportconfig.png)  

> Note: The download functionality will download the configuration file for all the MLLP adapters available in the environment. At this time, there is no option to select specific MLLP adapters for downloading the configuration.  

**_Import MLLP Adapters_**
1. To import MLLP Adapter(s), navigate to the Interface Management, and MLLP Deployments blade, click on 'Import'  
![IMP MLLP configuration import option image](/img/corolar21/impuserguide/impmllpimportoption.png)  

2. In the resulting 'Import' blade, click on the 'Upload' button found on the top  
![IMP MLLP adapter configuration import image](/img/corolar21/impuserguide/impmllpimportconfig.png)  

3. In the pop-up window, select the appropriate path and the MLLP Configuration file to import  
![IMP MLLP adapter configuration import image](/img/corolar21/impuserguide/impmllpimportconfig2.png)  

4. You will see the details of the configuration file in the Import blade, once reviewed click on the Import at the bottom  
![IMP MLLP adapter configuration import image](/img/corolar21/impuserguide/impmllpimportconfig3.png)  

5. Upon clicking Import, there will be a notification which will say that only new interfaces will be imported into this environment and that existing interfaces will remain unaffected. Click Okay in the notification.  
![IMP MLLP adapter config import confirmation image](/img/corolar21/impuserguide/impmllpimportconfirm.png)  

6. After clicking okay, in few seconds you should see a notification that the MLLP adapter(s) was successfully imported, and the adapter will be in Draft status in IMP as shown in the image below  
![IMP MLLP adapter imported config draft status image](/img/corolar21/impuserguide/impmllpimportdraft.png)  

7. Click on the imported interface and in the interface blade click on the Enable button to turn on the imported MLLP adapter  
![IMP enable imported MLLP adapter image](/img/corolar21/impuserguide/impmllpimportenable.png)  

8. Imported MLLP adapter(s) should be now up and running

#### 5.2.7 MLLP Field Listings
**_Configuration details for MLLP-In adapter_**   
sometable

**_Configuration details for MLLP-Out adapter_**  
sometable

### 5.3 Release Management
The Release Management option in the Interface Management portal allows users to download and/or import the artifacts that are necessary for the schema-based interfaces. To navigate to the Release Management blade in the IMP, select Interface Management tile from the homepage or the same from the left navigation bar and then select Release Management option  
![IMP Release Management option image](/img/corolar21/impuserguide/impreleasemgmt.png)  

**_Download Artifacts Package_**  
Users have the ability to download the artifacts they have uploaded in a particular environment and move it to another environment. This is typically common in scenarios where users develop schema-based environment in one environment, let’s say dev environment, and then move the interfaces along with the necessary schemas to the QA environment for testing or to the product environment. To download the zip folder that contains all the necessary artifacts from your interface development project, select the artifacts package you want download and then click on the ‘Download’ button from the top
![IMP Release Package download image](/img/corolar21/impuserguide/impreleasepkgdownload.png)  

**_Import Artifacts Package_**  
The import option on the top of the Release Management blade allows users to import artifacts package after they have developed or after downloading it from a specific environment. To import an artifacts package, 
1. click on the ‘Import’ option from the top of the blade  
![IMP Release Package import image](/img/corolar21/impuserguide/impreleasepkgimport.png)  

2. In the following import blade, click on the ‘Upload’ button from the top and then select the zip file from your local folder  
![IMP Release Package upload image](/img/corolar21/impuserguide/impreleasepkgupload.png)  

3. Once uploaded you will see the details of the artifacts you are trying to upload, click ‘Import’ button at the bottom to import the artifacts inside your zip package  
![IMP Release Package import artifacts image](/img/corolar21/impuserguide/impreleasepkgimportartifacts.png)  

4. The artifacts you imported will be saved to the respective blob storage for your interfaces to use and you can see the individual artifacts in that package listed in the ‘Artifacts Management’ blade


### 5.4 Artifacts Management
The Artifacts Management blade in the IMP visually represents the individual artifacts for the users. If, say for example, user wanted to quickly troubleshoot an issue related to error they see for an interface for missing/invalid schema, they can quickly navigate to this blade and review to see if they have necessary/valid schema for the interface to process messages. To navigate to this Artifacts management blade, select ‘Interface Management’ either from the home page or from the left navigation bar, and then select Artifacts Management  
![IMP Artifacts Management option image](/img/corolar21/impuserguide/impartifactsmgmt.png)  

In the Artifacts Management blade, users can either see the list of artifacts, or delete an individual artifact if they want to, using the![IMP Delete icon image](/img/corolar21/impuserguide/impdeleteicon.png) button at the top.

>Note: Deleting an artifact (schema, transformation map, etc.,) will not delete the specific artifact from the artifacts package you uploaded in section 5.3

## Reports
The Reports section consists of Audit Report for the interfaces and users access within the Interfaces Management Portal

### 6.1 Audit Report
1. To access Audit Report, click on the 'Reports' option from the home/landing page of the IMP or the same from the navigation bar on the left  
![IMP Reports option image](/img/corolar21/impuserguide/impreportsoption.png)  

2. In the following page click on Audit Report for generating the report  
![IMP Reports – Audit Reports image](/img/corolar21/impuserguide/impreportsauditreport.png)  

3. You could generate Audit Report based on the following filters
- Start Date - From date of the IMP access information has to be generated
- Start Time - From time of the IMP access information has to be generated
- End Date - To date for which the IMP access information has to be generated
- End Time - End time for which the IMP access information has to be generated
- Users - Specific user access information to be generated
- Securable - This is the components for the which the audit reports has to be generated like interfaces (Onboarded MLLP and LogicApps), Alerts, Adoptions, etc.
- Group By - Group results by date, users or securables
4. Once you have entered the relevant filters, click on 'View Report' to see the report  
![IMP Reports – view audit reports image](/img/corolar21/impuserguide/impreportsviewreport.png)


## Codeset Management
The Codeset Management section consists of User-Defined Tables that allows users to set up pre-built transformation maps that will be used at the run time by interfaces.
To navigate to the Codeset Management blade, click on the codeset management option from the home/landing page of the IMP or the same from the navigation bar on the left  
![IMP Reports – Audit Reports image](/img/corolar21/impuserguide/impcodesetmgmt.png)  

### 7.1 User Defined Tables
1. To access the user defined tables click on the 'User Defined Tables' from the Codeset Management section  
![IMP Reports – Audit Reports image](/img/corolar21/impuserguide/impcodesetlookuptable.png)  

2. You have the following options in this section
- Import Tables
- Export Tables
- Export Templates  



### 7.2 Export Templates
1. This option allows users to download the template for building/uploading the user defined tables  
![IMP Reports – codeset export image](/img/corolar21/impuserguide/impcodesetexport.png)

2. Upon clicking on 'Export Templates' a template for the table will be downloaded to your downloads folder  

### 7.2 Import Tables
1. This option allows users to import transformation tables into the IMP, that will be used at run time by the interfaces  

2. After clicking Import Tables in the following blade use the 'Choose File' option to import the spreadsheet that has the table  
![IMP Reports – codeset export image](/img/corolar21/impuserguide/impcodesetimport.png)  

3. Once the relevant relevant codeset table (spreadsheet) is selected, it will be uploaded in the IMP and you will see the following message, click OK  
![IMP Reports – codeset export image](/img/corolar21/impuserguide/impcodesetimportconfirm.png)  

### 7.3 Export Templates
The Export Templates option in the Codeset Management blade provides users the ability to download the template for the Codeset table they want to prepare and upload. The downloaded template will look something like the image shown below  
![IMP Reports – codeset export image](/img/corolar21/impuserguide/impcodesettemplate.png)  