gdjs.Page1Code = {};
gdjs.Page1Code.GDCounterObjects1= [];
gdjs.Page1Code.GDCounterObjects2= [];
gdjs.Page1Code.GDCounterObjects3= [];
gdjs.Page1Code.GDRebackObjects1= [];
gdjs.Page1Code.GDRebackObjects2= [];
gdjs.Page1Code.GDRebackObjects3= [];
gdjs.Page1Code.GDTouchObjects1= [];
gdjs.Page1Code.GDTouchObjects2= [];
gdjs.Page1Code.GDTouchObjects3= [];

gdjs.Page1Code.conditionTrue_0 = {val:false};
gdjs.Page1Code.condition0IsTrue_0 = {val:false};
gdjs.Page1Code.condition1IsTrue_0 = {val:false};
gdjs.Page1Code.condition2IsTrue_0 = {val:false};
gdjs.Page1Code.condition3IsTrue_0 = {val:false};
gdjs.Page1Code.conditionTrue_1 = {val:false};
gdjs.Page1Code.condition0IsTrue_1 = {val:false};
gdjs.Page1Code.condition1IsTrue_1 = {val:false};
gdjs.Page1Code.condition2IsTrue_1 = {val:false};
gdjs.Page1Code.condition3IsTrue_1 = {val:false};


gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDRebackObjects2Objects = Hashtable.newFrom({"Reback": gdjs.Page1Code.GDRebackObjects2});gdjs.Page1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Reback"), gdjs.Page1Code.GDRebackObjects2);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDRebackObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Page1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDTouchObjects2Objects = Hashtable.newFrom({"Touch": gdjs.Page1Code.GDTouchObjects2});gdjs.Page1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Touch"), gdjs.Page1Code.GDTouchObjects2);

gdjs.Page1Code.condition0IsTrue_0.val = false;
gdjs.Page1Code.condition1IsTrue_0.val = false;
gdjs.Page1Code.condition2IsTrue_0.val = false;
{
gdjs.Page1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Page1Code.condition0IsTrue_0.val ) {
{
gdjs.Page1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Page1Code.mapOfGDgdjs_46Page1Code_46GDTouchObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Page1Code.condition1IsTrue_0.val ) {
{
{gdjs.Page1Code.conditionTrue_1 = gdjs.Page1Code.condition2IsTrue_0;
gdjs.Page1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7563548);
}
}}
}
if (gdjs.Page1Code.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Counter"), gdjs.Page1Code.GDCounterObjects1);
{for(var i = 0, len = gdjs.Page1Code.GDCounterObjects1.length ;i < len;++i) {
    gdjs.Page1Code.GDCounterObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Page1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Page1Code.eventsList0(runtimeScene);
}


{


gdjs.Page1Code.eventsList1(runtimeScene);
}


};gdjs.Page1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Page1Code.eventsList2(runtimeScene);
}


};

gdjs.Page1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Page1Code.GDCounterObjects1.length = 0;
gdjs.Page1Code.GDCounterObjects2.length = 0;
gdjs.Page1Code.GDCounterObjects3.length = 0;
gdjs.Page1Code.GDRebackObjects1.length = 0;
gdjs.Page1Code.GDRebackObjects2.length = 0;
gdjs.Page1Code.GDRebackObjects3.length = 0;
gdjs.Page1Code.GDTouchObjects1.length = 0;
gdjs.Page1Code.GDTouchObjects2.length = 0;
gdjs.Page1Code.GDTouchObjects3.length = 0;

gdjs.Page1Code.eventsList3(runtimeScene);
return;

}

gdjs['Page1Code'] = gdjs.Page1Code;
