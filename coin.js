const coin = {
    state: 0,
    flip: function() {
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        
        if(Math.random() < .5){
            this.state = 1
        }else{
            this.state = 0
        }
            
        // console.log(this.state)
    },

    toString: function() {
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state === 0){
            return "Heads"
        }else{
            return "Tails"
        };

    },

    toHTML: function() {
        const image = document.createElement('img');
        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        // image.src = "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png";
        //image1.src = "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png";
        // document.querySelector('body').appendChild(image);
        // document.querySelector('body').appendChild(image1);
        if (this.state === 0){  
            image.src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png"
        }else if(this.state === 1) {
            image.src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
        }

        return image
        
    }
};


function display20Flips() {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.

    for (let i = 1; i <=20; i++){
        coin.flip()
        let text = document.createTextNode(coin.toString())
        document.querySelector("body").appendChild(text)
    }
    
    return results 
}
function display20Images() {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.

    for (let i = 1; i <=20; i++){
        coin.flip()
        document.querySelector("body").appendChild(coin.toHTML())
        results.push(coin.toHTML())
        
    }
    Array.document.write(results);
    return results 
    
}


display20Images()
// coin.flip()
// coin.toString()
// display20Flips()
// document.querySelector("body").appendChild( coin.toHTML(