// ==========================================================================
// Project:   Thecodeboutique - mainPage
// Copyright: ©2010 The Code Boutique
// Created By: Chad Eubanks
// ==========================================================================
/*globals Thecodeboutique */

// This page describes the main user interface for your application.  
Thecodeboutique.mainPage = SC.Page.create({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
mainPane: SC.MainPane.design({
  childViews: [

  // This is the main toolbar and will be used as the main navagtion //
	SC.ToolbarView.design({
		classNames: ["main_page"],
      layout: { top: 0, left: 0, right: 0, height: 36 },
      anchorLocation: SC.ANCHOR_TOP
}),
	      SC.ContainerView.design({
	        nowShowingBinding: 'Thecodeboutique.containerController.nowShowing',
	        layout: { left: 0, top: 36, bottom: 0, right: 0 }
	      }),

// Buttons: projects, about, who, blog, and todos* //	
		SC.ButtonView.design({
	        layout: { right: 570, width: 140, top: 10, height: 24 },
	        title: "Projects",
	        action: "showContainer1",
	        target: "Thecodeboutique.containerController"
	      }),

	      SC.ButtonView.design({
	        layout: { right: 430, width: 140, top: 10, height: 24 },
	        title: "About",
	        action: "showContainer2",
	        target: "Thecodeboutique.containerController"
	      }),

	      SC.ButtonView.design({
	        layout: { right: 290, width: 140, top: 10, height: 24 },
	        title: "Who",
	        action: "showContainer3",
	        target: "Thecodeboutique.containerController"
	      }),

	      SC.ButtonView.design({
	        layout: { right: 150, width: 140, top: 10, height: 24 },
	        title: "Blog",
	        action: "showContainer4",
	        target: "Thecodeboutique.containerController"
	      }),

	      SC.ButtonView.design({
	        layout: { right: 10, width: 140, top: 10, height: 24 },
	        title: "Todos",
	        action: "showContainer5",
	        target: "Thecodeboutique.containerController"
	      }),
	    ]
	  }),


//  This is the start of the projects container (container1) and is the first view //
//  *This needs to be changed.  The first view should not be a button loaded view* //

	  container1: SC.LabelView.design({
	    value: "The Code Boutique",
	    layout: { left: 40, centerY: 0, right: 40, height: 40 },
	    tagName: 'h1',
	  }),

//  This is the start of the about container (container2) //

	  container2: SC.ToolbarView.design({
		classNames: ["toolBar2"],
	      layout: { top: 0, left: 0, right: 0, height: 36 },
	      childViews: 'labelView desktopButton mobileButton tabletButton'.w(),
	      anchorLocation: SC.ANCHOR_TOP,

	   labelView: SC.LabelView.design({
	        layout: { centerY: 0, height: 24, left: 8, width: 200 },
	        controlSize: SC.LARGE_CONTROL_SIZE,
	        fontWeight: SC.BOLD_WEIGHT,
	        value:   'Todos'
	      }),

	      desktopButton: SC.ButtonView.design({
	        layout: { centerY: 0, height: 24, right: 198, width: 100 },
	        title:  "Desk Top"
	      }),

	      mobileButton: SC.ButtonView.design({
	        layout: { centerY: 0, height: 24, right: 99, width: 100 },
	        title:  "Mobile"
	      }),

	      tabletButton: SC.ButtonView.design({
	        layout: { centerY: 0, height: 24, right: 0, width: 100 },
	        title:  "Tablet"
	      }),
	    }),

//  This is the start of the who container (container3) //

	  container3: SC.LabelView.design({
	    value: "Container3",
	    layout: { left: 40, centerY: 0, right: 40, height: 40 },
	    tagName: 'h1'
	  }),

//  This is the start of the blog container (container4) //	
	container4: SC.LabelView.design({
	    value: "Container4",
	    layout: { left: 40, centerY: 0, right: 40, height: 40 },
	    tagName: 'h1'
	  }),

	//  This is the start of the todos container (container5) //	
		container5: SC.LabelView.design({
		    value: "Container5",
		    layout: { left: 40, centerY: 0, right: 40, height: 40 },
		    tagName: 'h1'
		  }),	

	});