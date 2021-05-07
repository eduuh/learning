# Introduction

- Microsoft Azure enables you to quickly and efficiently build, deploy, monitor and scale cloud hosted solutions.
  - Azure's deployment model is flexible.
    - You can develop in **Visual Studio**, commit your code to Github, build with Azure DevOps, and then Deploy to Azure.
    - You could also **develop on Linux** and deploy directy from your development machine to the cloud.
- Using Azure means you use you **favorite IDE** and you choose from a large range of development languages, from **C#, Java to NodeJs**
  - Using different operating systems.
- Microsoft provides and supports a wide range of development tools for all platforms (**windows, Linux and MacOs**)

## Learning Objectives.

1. Prepare your IDE for Azure Development.
2. Set up Visual Studio code.

- **Visual Studio Code** is a popular choice for developing applications for Azure.
  - It's Lightweight, taking up only megabytes of storage space and work on **windows , Linux and macOs**

### Visual Studio Code.

- Visual Studio Code is a free source code editor developed by **Microsoft**.
  - It supports hundreds of programing languages, including
    - **Git integration** and is designed to connect to Azure cloud services.
  - Visual Studio code doesn't include a **compiler**. Code compilation for specific languages and scenarios is added via extensions.

### Extension model.

- One of most powerful feature of **visual Studio code** is the extension model.
  - Extensions extend the capabilities of Visual Studio Code to add a wide range of new capabilities.
  - Extension can be use to **add compilers, add spell checking and integrate with azure services**
  - Extensions are free and can be added from the Extensions page within Vscode

### Azure extensions

- Many of the extensions Target Azure features and products.
- There are extensions that provides **docker support**, **subscription managements**, **tooling for Azure cli, database access and Azure Storage Api integration**

### Install Visual Studio Code and Prepare For Azure development.

- Visual Studio code supports **windows, linux and macOs**. To install visual studio code go to **https://code.visualstudio.com/**

To use visual Studio code for **Azure Development** you'll need to install Visual studio code locally and one of more Azure extensions.

### Install Visual Studio Code.

- To install Visual Studio code , use the appropriate steps for you os.

### Install Azure App service extension.

1. If you haven't alreay , open visual Studio code.
2. Open the Extension browser, it's acessed via the menu on the left.
3. Search for **Azure App Service**
4. Select The **Azure App service** result and click **install**

Visual Studio Code will install the extension, You're now ready to connect to your Azure subscription and deploy a **web, mobile or Api** app to an Azure App Service.

### Host a Web application with Azure App service.

- **Azure App Service** enables you to build and host web application in the programming language of your choice without managing infrastructure.

- Hosting your web application using **Azure** App service makes deploying and managing a web app much easier when compared to managing a physical server.

### Create a Web app in the Azure Portal.

### Why use the Azure portal

- The first step in hosting your web application is to create a web app (an App Service app) inside your Azure subscripition.

- There are several ways you can create **a web app**. You can use the Azure portal, the **azure command line** interface (ClI), a Script ro an Ide.

### What is Azure App Service?

- Azure App Service is a fully managed web application hosting platform.
  - Thi platform as a service (Paas) offered by Azure allows you to focuc on designing and buiding your app while Azure takes care of the infrastructure to run and scale your applications.

### Deployment slots.

- Using the Azure portal you can easily add **deployment slots** to an App service web app.
  - You can create a **stagin** deployment slop where you can push your code to test on Azure.
    - once you are happy with your code, you can easily **swap** the staging deploment slop with the **production slot**

### Continuous Integration /Deploment support

- Azure portal provide out of the box continuous integration and deployment with Azure DevOps,
  - **Github, Bitbucket, FTP and or aLocal Git Repository** on your development machine.
- Connects your web app automaticall with above sources and will do the rest for you by automatically syncing your code and any future changes on th code into the web app.

- **Azure DevOps**, you can define your own build and release process that compiles your source code, suns the tests, build a release, and finaly deploys the release into your web app every time you commit the code.

### Integrated Visual Studio Publishing and FTP publishing

- You can always benfits from the tight integration with **visual studio** to publish your web app to Azure via web Deploy technology. App service also supports FTP-based publishing for more traditional workflows.

### Built-in auto scale support (automatica scale-out based on real world load)

- Web app is the ability to **scale up/down or scale out**
  - Depending on the usage of the web app, you can scale your app up/down by increasing/decreasing the resources of the underying machine that is hosting your web app.
  - Scaling out, on the other hand, it the ability to increase the number of machine instance that are runningg your web app.

### Creating a Web app.

- When you're ready to run a web app on Azure, you visit the Azure portal and create a **Web App** resource.
- Creating a web app allocates a set of hosting resources in **App Service**, which you can use to host any based application that is supported by Azure, whether is be **ASP.NET** Core, **Node.js**,**Java**, **Python**

- The Azure portal provides a wizard to create a **web app**. This wizard require the following fields.

| Field            | Descriptions                                                                                                                                                                                                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subcription      | A valid and active subscription                                                                                                                                                                                                                                                                     |
| Resource Group   | A valid resource group                                                                                                                                                                                                                                                                              |
| App name         | The name of the Web APP. This name becomes part of the app's URL, So it must be unique amoung all Azure app service web apps.                                                                                                                                                                       |
| Publish          | You can deploy your applicaiton to App service as code or as ready to run . **Docker Image**. Selecting Docker image will activate the Docker tab of the wizard, you provide about the Docker registry from which App services wil retrieve you image.                                              |
| Runtime Stack    | If you choose to deploy your application as code, App service need to know what runtime you application uses (example icludes **node Js, python, Java and .Net**) IF you deploy your application as **Docker Image** you will not need to choose a runtime stack, since your image will include it. |
| Operating System | App Service can host application on **windows or Linux** servers                                                                                                                                                                                                                                    |
| Region           | The Azure region from which your application will bes served.                                                                                                                                                                                                                                       |
| App service Plan |

### App Service Plans

- An **App Service** plan is a set of virtual server resource that run **App service apps**
- Determines the performance characteristics of the virtual servers that run the apps assigned to the plan and the app service features that those app have acess to

- A single App service plan can host multiple App service web apps. In most cases, the number of apps you can run on a single plan will be limited by the performace characteristice of the apps and the resource limitations of the plan.

- App service plan are the unit of billing for app service. The size of each app service plan n you subscription in additonn to bandwidth resources used by the apps deployed to those plans.

### Deploy code to App Service.

### Automated Deployment.

- Automated deployment, or continuous integration, is a process used to push out new feature and bug fixes in a fast and repetitive pattern with minimal impact on end users.

  - **Azure DevOps** You can push your code to Azure DevOps, build you code in the cloud, run the tests, generate a release from the code, and finally push your code to an Azure Web App.
  - **GitHUb** Azure supports automated deployment directly from GitHub. When you connect your GitHUb repository to Azure for automated deployment, any changes you push to your production branch on Github will be automatical deployed for you.
  - **Bitbucket** With its similarities to **Github**, you can configure an automated deployment with Bitbucket.
  - **OneDrive** Microsoft cloud-based storage. You must have a microsoft Acoount linked to a OneDrive account to deploy to Azure.
  - **Dropbox**Azure supports deployment from dropbox.

### Manual Deployment.

- **Git** App service web apps feature a Git URL that you can add as a remote repository.
- **az webapp up** Webapp up is a feature of the az command-lne inteface that packages your app and deploys it. **az webapp up** up can create a new App service web app for you if you havent' already.
- **zipdeploy** Use az webapp deployment source config-zip to send a Zip of your application file to App service. Zipdeploy can also be accessed via basic **HTTP** utilities such as **curl**
- **Visual Studio** Visual Studio features an App service deployment wizard that can walk you through the deployment process.
- **FTP/s** FTP or FTPS is a Traditional way of pushing your code to many hosting environments, including App service.

### Deploy with az webapp up.

This command will package up our application and send it to our App service instance where it will be built and deployed.

First we need to gather some information about our web app resource. Run these comands to set shell variables that containes our app's name, resource group name, plan name, sku.

**Az webapp up** needs these values to target our existing web app.

```bash
APPNAME=$(az webapp list --query [0].name --output tsv)
APPRG=$(az webapp list --query [0].resourceGroup --output tsv)
APPPLAN=$(az appservice plan list --query [0].name --output tsv)
APPSKU=$(az appservice plan list --query [0].sku.name --output tsv)
APPLOCATION=$(az appservice plan list --query [0].location --output tsv)
```

Now, run **az webapp up** with the appropriate values, make sure you are in the **helloworld directory** before running this command.

```bash
az webapp up --name $APPNAME --resource-group $APPRG --plan $APPPLAN --sku $APPSKU --location "$APPLOCATION"
```

- App service simplifies managing and controlling your web app in comparison to traditional hosting options.
- App service can help you reduce the time and effort spent running and managing your web app, and provide advanced cloud features such ase auto scaling and Git intergration.

### Learn More Link

[App service on Azure Stack Overview](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-app-service-overview)
[Deploy to Azure App service using Visual Studio code](https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-app-service-node-01)
[Configure deploymente sources for App services on Azure Stack](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-app-service-configure-deployment-sources)
[Set up staging environments in Azure App Services](https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
[Deployment FAQs for Web Apps in Azure](https://docs.microsoft.com/en-us/azure/app-service/faq-deployment)

### Learning objective

- Create an Asp.net core web app in visual studio.
- Publish a web app to Azure using visual studio.
- Update a web app in Visual Studio and Publish the Changes to Azure

### Install the necessary workload.

The first step in getting your new site ready is to prepare your developmente environment.

- Creating and deploying Asp.net core web application require that you have the necessary tools installed on you local machines

### Configure your Development environment.

- You will need tools within **visual studio** to build debug and deploy ASP.NET core web applicaiton to azure

#### What are Visual Studio Workloads?

1. **A workload** is a pre-configured bundle of tools within Visual Studio that are grouped to enable building certain types of application, use certain development languages or develop for specific platforms.

#### Visual Studio Workloads for ASP.NET core development and publishing.

Visual Studio 2019 has two workloads that you need to create, publish and deploy your website to Azure.
These workloads include the templates for your ASP.NET core site and provides the ability to connect and deploy your site to Azure.

1. **ASP.NET and web development**
2. **Azure Development**

#### installing Visual Studio workloads.

You use the Visual Studio Installer to modify the components installed as part of Visual Studio including workloads.

1. click **Visual studio installer**
2. Click **Modify**
3. Ensure the **ASP.NET and we development** and **Azure development** workloads are selecte under the **web & cloud** secteon of the **workloads**
4. Next , click on **Modify** button on the bottom right of the Installer. Visual Studio installer will dowload and install the necessary components.
5. When The installed completse click **Lauch** to open Visual Studio.

#### Create a new ASP.NET core app.

What is the Azure App Service?
Azure App Service is a service for hosting web applications, REST APIs, and backend services. App Service supports code written in .NET Core, .NET Framework, Java, Ruby, Node.js, PHP, and Python. App Service is ideal for most websites, particularly if you don't need tight control over the hosting infrastructure.

What is the App Service plan?
The App Service plan defines the compute resources your app will consume, where those resources are located, how many additional resources the plan can consume, and the pricing tier. These compute resources are analogous to the server farm in conventional web hosting. One or more apps can be configured to run on the same App Service plan.

When you deploy your apps, you can create an App Service plan or you can continue to add apps to an existing plan. However, apps in the same App Service plan share the same compute resources. To determine whether the new app has the necessary resources, you need to understand the capacity of the existing App Service plan, and the expected load for the new app. Overloading an App Service plan can cause reduced performance or downtime for your new and existing apps.

You can define an App Service plan in advance in the Azure portal with PowerShell or the Azure CLI, or set one up as you publish your application in Visual Studio.

Each App Service plan defines:

Region (West US, East US, and so on)
Number of VM instances
Size of VM instances (small, medium, large)
Pricing tier (Free, Shared, Basic, Standard, Premium, Premium V2, Isolated)
Select a region
When creating an App Service plan, you have to define a region or location where that plan will be hosted. Typically, you would choose a region geographically close to your expected customers.

Pricing and reliability levels
Shared compute: Free and Shared, the two base tiers, run an app on the same Azure VM as other App Service apps, including apps of other customers. These tiers allocate CPU quotas to each app that runs on the shared resources, and the resources cannot scale-out.

Free and Shared plans are best for small-scale personal projects with limited traffic demands, with a set limit of 165 MB of outbound data every 24 hours.

Dedicated compute: The Basic, Standard, Premium, and Premium V2 tiers run apps on dedicated Azure VMs. Only apps in the same App Service plan share the same compute resources. The higher the tier, the more VM instances are available to you for scale out.

The Standard service plan is best suited for live production workloads, where you are publishing commercial applications to customers.

The Premium service plans support high-capacity web apps where you do not want the additional costs of a dedicated (isolated) plan.

Isolated: This tier runs dedicated Azure VMs on dedicated Azure virtual networks, which provide network isolation on top of compute isolation to your apps. It provides the maximum scale-out capabilities. You would only select an Isolated service plan when you have a specific requirement for the highest levels of security and performance.

Isolate your app into a new App Service plan when:

The app is resource-intensive
You want to scale the app independently from the other apps in the existing plan
The app needs resources in a different geographical region
Your App Service plan can be scaled up and down at any time. You can choose a lower pricing tier at first and scale up later when you need more App Service features.

Specify the resource group
A resource group is a logical container into which Azure resources like web apps, databases, and storage accounts are deployed and managed. It is a mechanism for organizing resources for the purpose of management, monitoring and billing. You can use an existing resource group or create one directly from Visual Studio.

## Explore the project structure

- I created an ASP.NET Core web app in Visual Studio
  - customize your website.

-Let's explore the project structure to see what Visual Studio has created for us.

### Dependencies

Dependencies include the ASP.NET Core internals to get your app up and running. Unless you are adding specific third-party packages, you won't need to spend much time in this folder.

### Properties

The properties folder contains configuration data for where you are hosting your web app. If you expand the PublishProfiles folder now, you should see the URL for the Alpine Ski Hill site. Each publishing profile is an .xml file containing publishing configuration information, such as the Azure address that Visual Studio uses to upload your files.

### wwwroot

The wwwroot file contains all of your static assets for your site, such as the css, js, images, and lib files. When you are ready to style and add more functionality to your site, you will work in here.

### Pages

The Pages folder includes Razor templates for the pages of your site. Razor is a syntax that is built up around HTML, which has special conventions for displaying data and executing logic on your site.

Each page in your site is represented with two code files:

The first is a .cshtml file, which is the Razor markup file. This file includes your display HTML and some C# logic.

The second file is a .cs file, which is the C# code-behind that includes PageModel class. This file allows you to intercept HTTP requests and do some processing on that request before passing off any data to the Razor file.

### appsetting.json

This is a configuration file for ASP.NET Core.

### Program.cs and Startup.cs

rogram.cs and Startup.cs configure and launch your web host for your site.

### Introduction to Razor templates

We will want to make some basic changes to our website. You will need to have a basic understanding of how to leverage the Razor templates to customize your web app.

#### What is Razor?

Razor is an ASP.NET syntax used to create dynamic web pages with C#. When a server reads a Razor page, the C# code is run before it renders the HTML. This allows you to generate dynamic content quickly.

Razor uses @ directives to tell ASP.NET how to process a page.

For example, take a look at the code in the Privacy.cshtml page:

The @page directive is telling ASP.NET to process this file as a Razor page.
The @model directive is telling ASP.NET to tie this Razor page with a C# class called PrivacyModel.
Razor also uses the @ symbol to transition between code and HTML. If you look at the preceding snippet, you'll notice @{ ... }. This is a Razor code block. It's code that is executed but not rendered.

To render the output of a code statement, use the @ in front of a C# expression. There's one example in the preceding code block in the h1 tag.

Creating and publishing a website are just the first steps in creating a good website. Once you start to add content, you'll need to update your site. Once you've initially published your site to Azure, you can update at any time.

#### Stage a Web app deployment for testing and rollbacks by using APP Service deployment slots.

- Deployment slots are used to streamline.

- You want a way to deploy a new version of the app without downtime or a service interruption. You also want to be able to rapidly toll back a new deployment to the previous version of its causes problem.

#### Learning Objectives

- Create a deployment slot as a staging environment in App Service.
- Use git to deploy a new version of a web app to a slot.
- Configure which app settings are swapped and which are not swapped when you deploy a slot.
- Swap slots to deploy a web app or roll back a deployment.

### Create deployment slots.

- Organization often need to run web apps in isolated environments to test before deployment.
  - They also need to deploy quickly and without affecting users.
    Suppose you're trying to decide whether to use slots to streamlined way to deploy a web app in your social media system.
  - You want to find ouut if deployment slots will reduce downtime during deployments, if they ease rollbacks and if you can set the up in Azure.

### Use a deployment slot.

- Within a single Azure app services web app, you can create multiple deployment slots.
- Each slop is separae instance of that web app, and it has a separate host name, you can deploy a different verrsion of your web app into each slot.

- One slop is the **production slot**. This slot is the web app that users see when they connect. Make sures that the app deployed to this slop is stable and well tested.
  -you can run tests such us production tests, aceptance test and capacity tests. Fix any porblem before you move the code to the production slot. Additional slots behave like their own App Service instances.

- After you're satisfied with the test results fo a new app version deploy it by swapping its slops with the production slot.
- Use additional slots to host new versons of your web app.
- allow you to fix any problem before you move the code to the productin slot.
- Additional slots behave like their own App servise instance, so you can have confidence that your tests show how the app will run in production

After you're satisfied with the test results for a new app vesion, deploy it by swapping its slots with the production slot.

- unlike a code deployment, a slot is instantenous, when you swap slots host names are exchanged, immediately sending production traffic to the new version of the app.

### Understand slots as separate Azure resources.

- When you use more that one deployment slot foa web app, those slops are treated as separate instances of that web app.
- They're listed separately on the **All resources** page in phe Azure portal. The each have their own **URL**

### Create deploment slots and tiers.

- Deploment slots are available only when you app users an **App services plan** in **standard**, **premium** or isolated tier.

| Tier     | Maximum staginig slots |
| -------- | ---------------------- |
| Free     | 0                      |
| shared   | 0                      |
| Basic    | 0                      |
| Standard | 5                      |
| Premium  | 20                     |
| Isolated | 20                     |

### Avoid a cold start during swaps.

- The initial delay is called a **cold start**. You can avoid a cold start by using slots swaps to deploy to production when you swap a slop into production, you "warm up" the app becouse your actions sends a request to the root site.

- The **warm-up** request ensures that all compilations and caching tasks finish.

### Create a Deployment slot.

- Before you create a slot, make sure your web app is running in the **stardard, premium or isolated tier**

1. Open your web app in the Azure portal.
2. Select the **Deployment slots**page.
3. Select Add slot.
4. Name the slot.

### Access a slot.

The new slots host name is derived from the web app name and the name of the slop you see this host name when you selcet the slot on the **Deploment slots**

- You can deploy you code to the new slot the same way you deploy it for the Production slot, Just substitute the new slot's name or url in the configuration of the deployment tool you use. If you use FTP to deploy you''ll see the FTP host name and username just under the slot's URL.

- The new slot is effectively a separate web app with a different host name. That's why anyone or the internet can access it they know. Unless you register the slt with a search engine or link to it from a crawled page, the slot won't appear in search engine indexes.

- You can control acess to a slot by useng Ip-adresss restrictions. Create alist of IP address rangers that you'll allow to acess the slot or a list of rangers that you'll deny acess to the slot.

## Configure the git client and clone the web app source code.

1. In azure portal, open the **cloud shell** Enter the following command to set pu your **git username** and **email address**.

```bash
git config --global user.name "<your name>"
git config --global user.email "<your email address>"
```

2. To create a folder for the source code, enter the following commands.

```bash
mkdir demoapp
cd demoapp

```

3. To clone the soure for the web app enter the following commands:

```bash
git clone https://github.com/Azure-Samples/app-service-web-dotnet-get-started.git
cd app-service-web-dotnet-get-started
```

## Configure a git remove to deploy the app to production.

To use git to deploy the source code to the web app's production slot, set up you app's git URL as a remote repository. Follow these steps.

```bash
git remote add production <git-clone-url>
```

To deploy the web app to the production slot, enter the following command. When you're prompted for the password enter your deployment password you created previously.

```bash
git push production
```

The deloyment is secure \_\_check on the **deployment cretdential** to get the git credentials for your deployment.

### Deploy a web app by swapping deployment slots.

- When you swap slops, you can precisely control the behavior and configuration of web apps.
  - Suppose you've set up **deployment slots for productions and stagin**
    - You've testend a new version of your social media web app in the staging slot. Now it's time to deploy that new version to production.
    - You want to deploy the app somothly and in the correct configuration.

## Manage the configuration for a swap.

- When you swap two slots , the app's configuration travels to the new slot along with the app.
  - You can override this behavior for individual application settings and configuration string by configuring them **slot settings**
- **Suppose** for example you have two databases.
  - You can usef one for production and the other for acceptance testing.
  - You always want the app verison in the staging slot to use the testing database.
    - To achieve this you can configure the database connection string as a slot setting.

## Configure slot settings

- To view and configure settings for the swap, go to the web app resource and follow these steps:

#### Configure deployment setting.

#### Configure deployment slots.

- when you swap slots, the settings in the target slot (which is typically the production slot) are appliend to the app version in the source slot before the host names are swapped. You might discover problems at this point.

**Phase 1** - Slot setting from the target slot are applied to the web app in the source slot. Then Azure warms ut the staging slot. At this point, the swap operations pauses so you can test the app in the source slot to make sure it works with the target slot configuration.

**Phase 2** The host names for the two sites are swapped. The version of the app now is the source slot receives its slot settings.

## Preview slot swapping.

To use the **swap_with_preview** feature, select **Perform swap with preview** review the settings and then select **start Swap**.

- Swap with preview can only be used with sites that have deployment slot settings enabled

## Auto Swap.

- Auto swap brings the zero-downtime and easy rollbacks benefits of swap based deployments to automated deployment pipelines.
- when you **configure** a slot for auto swap. Azure automatically swaps it whenevery you push code or content into that slot.

  - When you use auto swap, you can't test the new app verision in the staging slot before the swap.
  - Auto swap mainly benefits users who want zero-downtime deployments and simple automated deployment pipelines.

- If you watn to be able to test before you swap, you'll need a more complex deployment pipeline that requests the slot swap itself. You can deploy to a seperate slot that's dedicated for testing.

## Configure auto Swap

- Auto swap brings the **zero-dowtime** and easy rollback benefits of swap-based deployment to automated deployment pipelines.

  - When you configur a slot for auto swap, Azure automatically swaps it whenever you push code or content into that slot.

- When you use auto swap, you can't test the new app verisin in the staging slot before the swap.
- Auto swap mainly benefits users who want zero-downtime deployments and simple automated deployment pipelines.

- if you want to be able to test before you swap, you'll need a more complex deployment pipeline that requests the slop swap itself.

## Configure auto swap.

- To configure auto swap for a slot, navigate to the **configuration**
  - **page for the slot in the Azure portal.**

### Deploy a web app by Using deployment slots

- When you're ready to swap two slops, make sure you've applied the correct configuation to the swapped slots.

## Scale an App Service Web app to efficiently meed demand with App Service up and Scale out

Respond to periods of increased activity by incrementally increasing the resources available and then, to reduce costs, decreasing these resources when activity drops.

you will learn:

1. Scale a web app in and out manually.
2. Scale a web app up and down.

it's important to be able to scale a web app for these reasons:

- It enables the app to remain resposive during periods of high demands
- It helps to save you money by reducing the resources required when demand drops.

Azure app service enables you to meed these goals by providing scale up and down , and scale in and out.

## Scale a web app manually

By manually scaling out and back in again, you can respond to expected increase and decreases in traffic. Scalling out has the additional benefits avaibilty of the increased numbers of instances of the web app.

In the hotel reservation system, you can scale out before an anticipated seasonal influx.
You can scale back in when the season is over and the number of booking requests is reduced.

### App Service plans and Scalability.

- A web app running in Azure typically uses **Azure App service** to provide the hosting environments, App Service can arrange for multiple instances of the web app an will load balance incoming request across these instances.

- The resources available to each instance are defined by an App service Plan.
- The **App Service plan** specifies the operating system (windows or Linux), the hardware (memory, CPU processing capacity, disk storage) and the availability of services like automatic backup and restore.

- Azure provides a **series of well-defined app service plans tiers**
  1. **The Free tier provides 1 gb** of disk space and support for up to 10 apps.
  - **but only a single shared instance and no SLA for availability**
  2. **The shared tier** Provides support for more apps (up to 100) also runing on a single shared instance. Apps have a compute quota of 240 minutes per day> **\_No SLA**
  3. **The Basic Tier supports** an Unlimeted number of apps and provide more disk space.
     **Apps can be scaled out to three dedicated instances** This tier provides and **SLA of 99.5% availability**
  4. The **Premium tier gives you up to 20 dedicated instances** an availability SLA of 99.89% and multiple levels of hardware.
  5. The Isolated tier runs in a **dedicated Azure virtual network** which gives you network and compute isolation. This tier can **scale out to 100 instance and has an availabity SLA of 99.95%**

## Monitor and scale a web app.

When you create a web app, you can either create a new **App service plan or use an existing one** If you select an existing plan, any other web apps that ues the same plan will share resources with your web app.

You scale out by **adding more instances to an App service plan** up to the limit available for your selected tier. If you're not using the Free tier, you're charged for eac instance by the hour. You can perform this task in the Azure portal.

- The key to **scalling up effectively is knowing when to scale, and by how much**
- You monitor the performance of a web app by using the metrics availablefor the App services. The simplest way to do this is to use the **Azure portal**.
- If you notice a steady increase in resource use, such as CPU utilization, memory occupancy, or disk queue lenght, you should consider scaling out before these metrics hit a critical point. You should also monitor the average resopinse time of request and number of failing requests. If both of these figures are high , the system might be running close to (or beyond ) capacity. You might need to scale out immediately.

* You should scale out a system when you expect an increase in traffic. You might also scale out in response to declining performance.

## Scale up a web app.

- Scalling out enables you to run more instances of a web app, bute the resources available to each instance are determined by the pricing tier used by the **App services plan** host the web service.

- Each pricing tier specifies the **computing power provided, together with the memory and maximum numder of instances that can be created.**

- Initially whenn you deploy a **web app using a relatively cheap pricing tier**
  - You might find the resources are sufficient to start with.
- But the resources might become too limited if deman for your web services grows.

  - If you add features that require more power.
    - You can scale up to a **more powerful pricing tier**

### App services plan pricing tiers and hardware levels.

- The different pricing tiers available for App services plans offers various levels or resources. \_The basic**, standard, and primium tiers are based on A-series VMs** that have different amounts of memory and IO capacity.

#### Scale up a web app.

- You can scale an App Servise plan up and down by changing the pricing tier and hardware levels that it runs on. You can start with the **free tier and scale up as needed according to your requirements.**

## Deploy and run a containerized web app with Azure App service

- Create a Docker image and store it in a repository in Azure container registry.
- Use Azure App service to deploy a web application based on the Docker image.

- You can build and deploy **Azure-based web apps** by using Docker containers.
  - This approach enables you to roll out a web app quickly.
  - Support for continuous delivery ensures that user see the latest build of the app.
    - while mimizing administrative overhead.

### Learning.

1. How to creade and Store docker iamges in Azure Container Registry.
2. You'll see how to use these images to deploy a web app.
3. You'll learn how to **configure continuous deployment** so that the web app is redeployed whenever a new verision of the images is released.

## Create Docker images and store them in a repository in Container Registry.

## Use App Service to run web apps that are based on Docker images held in Container Registry.

## Use webhooks to configure continuous deployment of a web app that's based on a Docker image.

## Prerequisites.

- Basice experience with Docker, including the use of **Docker commands** to store and retriev Docker images.
- Experience with creating web apps by using App service.

### Build and Store images by Using Azure container Registry.

- Azure container Registry enables you to store Docker images in the cloud, in an **Azure storoge account**
- **Container registry** is an Azure service that you can use to creade your own private **Docker registries**
  - Like docker hub, container registry is organized around repositories that contain one or more images.
  - Container Registry also lets you automate tasks such as redeploying an app when an image is rebuilt.

### Security is an important reason to choose Container Registry insteade of Docker Hub.

- You have much more control over who can see and use your images.
- You can sign images to increaes trust and reduce the chances of an images becoming accidentally corrupted or otherwise infected.
- All images stored in a container registry are encrypted at rest.

Working with images for **container registry** is like working with **Docker_Hub** but offers a few unique benefits.

- **Container Registry** runs in Azure. The registry can be replicated to store images near where they're likely to be deployed.
- **Container Registry** is highly scalable, providing enhanced thoroughput for Docker pulls that can span many nodes concurrently. Phe premium sku of container Registry includes 500 GIB of storage.

### Using Container Registry.

You create a registry by using either the **azure portal or the Azure cli** **acr create** command.

```bash
az acr create --name myregistry --resource-group mygroup --sku standard --admin-enabled true
```

- You can also use container registry to build images. Instead of building an image yourself and pushing it to container Registry, use the **Cli to upload** the **Docker\_\_file** and other files that makes up your image.

- Container Registry will then build the image for you. use the **acr build** command to run a build.

```bash
az acr build --file Dockerfile --registry myregistry --image myimage .

```

Additional information above Azure Container Registry as well as a link to supported **CLI**commands to manage private registry are available in the learn more section of this module.

### Deploy a web app by using an Image from an azure container Registry repositories.

- You can deploy a web app to Azure app service directly from Azure container registry.

### Deploy a web app from a repository in Azure container Registry.

When you create a **web app from** a docker image , you configure the following propeties.

1. The registry that contains the image. The registry can be Docker Hub, Azure container Registry, or some other private registry.
2. The image. This item is the name of the repository.
3. The tag. This item indicates which version of the images to use from the repository. By convention, the most recent version is given the tag **latest** when it's build.
4. **STartup file** This item is the name of an executable file or a command to be run when the image is loaded. it's equivalent to the command that you can supply to docker when running an image from the command line by using **docker run**

### Update the images and automtically redeploy the web app.

- Continuous deployment is a key features for many fast-moving organizations. They need to deploy the latest version of their software quickly, but with the minimum of fuss.

### What is webhook?

- Azure App service support contnuous deployment using **webhooks**. A webhook is service offered by \_azure container Registry\_\_
- Services and application can subscrible to the **webhook** to receive notifications about updates to images in the registry.
- A web app that uses **App service** can subscrible to an Azure container Registry webhook to receive notifications about updates to the images that contains the web app.

### What is the container Registry tasks feature?

- You use the **tasks** features of container Registry to rebuilt you images whenever its source code changes automatically.
- You configure a container Registry task to monitor the Github repository that contains your code and trigger a build each time it changes.

### Enable continuous integration from App service.

- The container Settings page of an APP service resource in the Azure portal automates the setup of continuous integration. If you turn on Continuous Deployment, App service configuration a webhoook in your contaner registry to notify an App service endpoint.

### Extend continuous integration to source control by using container Registry task.

- Container Registry tasks must be created from the command line. Unlike the **Az acr** build command that we used earleir to build our images, the **az acr task create** command creates and registers a **long-lived**task.

- The following command shows how to create a task called buildwebapp. The task monitors the **github** repository for the smaple web app used by this module. Each time a change is committed, the task builds the web images.

- Docker images worm the soruce code in **Github** and stores it to your registry in **Container registry**. Before running this comamdn, you need to creat a Github personal acess token with permissions to create a webhook in your repository.

```bash
az acr task create --registry <container_registry_name> --name buildwebapp --image webimage --context https://github.com/MicrosoftDocs/mslearn-deploy-run-container-app-service.git --branch master --file Dockerfile --git-access-token <access_token>

```

## Summary

- You can use Azure container registry to hold **Docker images** and you can construct web apps based on these images by using webhooks, you can configure **continuous deployment** for web app. This process monotors the images for the web app in container registry and couses the web app to be redeployed automatically if the image changes.
