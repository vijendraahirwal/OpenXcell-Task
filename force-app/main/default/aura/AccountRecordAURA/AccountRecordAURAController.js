({
    doInit : function(component, event, helper) {
        var actions = [
            {label: 'Edit', name: 'edit'},
            {label: 'Delete', name: 'delete'}
        ];
        component.set('v.mycolumns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'AccountNumber', fieldName: 'AccountNumber', type: 'text'},
            {label: 'Industry', fieldName: 'Industry', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'phone'},
            {type: 'action', typeAttributes: { rowActions: actions } } 
        ]);
        helper.pullData(component);
    },
    
    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        switch (action.name) {
            case 'edit':
                helper.editRecord(component, event);
                break;
            case 'delete':
                helper.deleteRecord(component, event);
                break;
        }
    },
    openModel: function(component, event, helper) {
        // Set isModalOpen attribute to true
        component.set("v.isModalOpen", true);
    },
    
    doSave : function(component, event, helper) {
        console.log("Inside Save Condition");
        var action = component.get('c.createAccount');
        action.setParams({
            ac : component.get('v.createAcc')
        });
        action.setCallback(this,function(result){
            var getAllValue = component.get('v.createAcc');
            alert(JSON.stringify(getAllValue));
        });
        $A.enqueueAction(action);
        component.set("v.isModalOpen", false);
    },

    doCancel : function(component, event, helper) {
        console.log("Inside Cancel Condition");
        component.set("v.createAcc",'');
        component.set("v.isModalOpen", false);
    }
 })