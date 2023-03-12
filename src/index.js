import "./styles.css";

const tour = new Shepherd.Tour({
  defaultStepOptions: {
    classes: "shadow-md bg-purple-dark",
    scrollTo: true,
    showCancelLink: true
  }
});

tour.addStep({
  id: "example-step",
  title: "Product Tour Guide",
  attachTo: {
    element: ".example-css-selector",
    on: "bottom"
  },
  classes: "example-step-extra-class",
  buttons: [
    {
      text: "Start Tour",
      action: () => tour.show("home")
    },
    {
      text: "Video",
      action: tour.next
    },
    {
      text: "Video Tutorial",
      action: tour.next
    },
    {
      text: "No Thanks",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "home",
  title: "Home",
  text: "Click Home to see Latest Product Update and Banner",
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "work-center",
  title: "Work Center",
  text: `<b class="setBlackColor">This module
   </b>provides you with information about the work you care about, and the applications that are available for your use.
   <br>
   <br>
   <b class="setBlackColor">Inbox</b>
    provides information about the tasks and process instances that are active in the system. 
    Click any item to see the options available from the drop down menu.
    <br>
    <br>
    <b class="setBlackColor">My Applications</b>
     provides a list of applications that have been published for your use. Click any application to create a new instance.`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "manage",
  title: "Manage",
  text: `<b class="setBlackColor">
  This module 
  </b>
  provides you access to AgilePoint administrative features. 
  It includes the following features: Dashboard, Runtime Management, Application Management, Permission Management, Access Control, System and App Builder Configuration.`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "appbuilder",
  title: "App Builder",
  text: `<b class="setBlackColor">This module </b>provides you with the features needed to define, configure and publish custom applications. It includes the following features: Application Explorer, Process Designer, and Form Designer.<br><br><b class="setBlackColor">Data Entities</b> is an AgilePoint NX component that lets you create and manage a custom data model. You can use Data Entities to securely store and retrieve data for AgilePoint NX apps as an alternative to an external data source, such as a database, SharePoint, or a CRM service.`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "pagebuilder",
  title: "Page Builder",
  text: `<b class="setBlackColor">This module </b>lets you create custom pages and navigation in the AgilePoint NX Portal. This lets you create a custom menus, navigation, content, functionality (including widgets), page layouts, and look and feel, including custom branding.`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "analytics",
  title: "Analytics",
  text: `<b class="setBlackColor">This module </b>provides you an opportunity to add and run reports and/or dashboards. It includes the following features: Report Management, Profile Management, and Configuration.`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "more",
  title: "More",
  text: `<span class="setBlackColor">Collaborate module </span>provides you with access to the collaboration features, including  your Yammer news feed.<br><br><span class="setBlackColor">App Store module </span>lets you share, buy, and sell apps that run on the AgilePoint NX platform. On the App Store, you can download more than 50 starter app templates based on common scenarios. This includes sample apps for both process-based apps and form-based apps.<br><br><span class="setBlackColor">Settings module </span>provides you access to settings that control the AgilePoint Cloud user interface. The settings control individual modules as well as portal options.<br><br><span class="setBlackColor">Help module </span>provides you access to information about the modules and features supported in the AgilePoint Cloud.<br><br>`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.addStep({
  id: "findoutmore",
  title: "Find Out More",
  text: `<span class="setBlackColor">Collaborate module </span>provides you with access to the collaboration features, including  your Yammer news feed.<br><br><span class="setBlackColor">App Store module </span>lets you share, buy, and sell apps that run on the AgilePoint NX platform. On the App Store, you can download more than 50 starter app templates based on common scenarios. This includes sample apps for both process-based apps and form-based apps.<br><br><span class="setBlackColor">Settings module </span>provides you access to settings that control the AgilePoint Cloud user interface. The settings control individual modules as well as portal options.<br><br><span class="setBlackColor">Help module </span>provides you access to information about the modules and features supported in the AgilePoint Cloud.<br><br>`,
  buttons: [
    {
      text: "Prev",
      action: tour.back
    },
    {
      text: "Next",
      action: tour.next
    }
  ]
});

tour.start();
