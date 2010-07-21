require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author Chad Eubanks
  @version 0.1
  @static
*/
Thecodeboutique.containerController = SC.Object.create({

  /** Bound to the nowShowing property of the container. */
  nowShowing: 'container1',
  
  showContainer1: function() {
    this.set('nowShowing', 'container1');    
  },

  showContainer2: function() {
    this.set('nowShowing', 'container2');    
  },

  showContainer3: function() {
    this.set('nowShowing', 'container3');    
  },

  showContainer4: function() {
    this.set('nowShowing', 'container4');    
  },

  showContainer5: function() {
    this.set('nowShowing', 'container5');    
  }

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('thecodeboutique');