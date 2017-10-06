var friendName = ['Pj,', 'Amon', 'Aj', 'Ricco', 'Trey']
var locName = ['kitchen', 'bathroom', 'living room', 'bedroom', 'basement', 'attic', 'mall', 'elevator', 'pool', 'classroom']
var weaponName = ['AR-15', 'Excalibur', 'pistol', 'shoe', 'knife', 'belt', 'dog', 'UMP 45', 'glass bottle', 'shoelace', 'rocket launcher', 'hammer', 'Kamehameha', 'Final Flash', 'Maskeno', 'Special Beam Cannon', 'Desert Eagle', 'grenade', 'lighter fluid', 'machete']

/* var i = 0
var j ;
var z ;

    var h3 = document.createElement("h3")
    var a = document.createTextNode("Accusation:" )
    h3.appendChild(a)
    document.body.appendChild(h3)





    for(i = 0; i < 101; i++){
        console.log( )
    } 
   for(j = 0; j < 101; j++){
var phrase = document.createTextNode(h3, j + ' I accuse ' + friendName[j] + ' with the ' + weaponName[j] + ' in the ' + locName[j] + '!' ) 
    
var para = document.createElement("p")
var a = document.createTextNode("I accuse" + friendName[i])
var b = document.createTextNode("with the" + weaponName[i])
var c = document.createTextNode("in the" + locName[i] + '!')
para.appendChild(a, b, c)
document.body.appendChild(para)  */





    
    for(i=0;i<101;i++){
var h3 = document.createElement("h3");  // Create a <button> element
 
var t = document.createTextNode("Accusation" + ' ' + i + ':');  // Create a text node
 var a = document.createTextNode("I accuse" + friendName[i])
var b = document.createTextNode("with the" + weaponName[i])
var c = document.createTextNode("in the" + locName[i] + '!')
h3.appendChild(t, a, b, c);  // Append the text to <button>
document.body.appendChild(h3); 
}



    document
        
    });


    


