/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */


 function listFormat(items, options) {


      let formattedArr = items.filter((val) => !!val);

      const itemsLength = formattedArr.length;


      console.log(formattedArr,"latest")


      const uniqueItemsLength = [...new Set(formattedArr)].length

      if(itemsLength === 0){
        return "";
      }
      if(itemsLength === 1){
        return formattedArr[0]
      }



      if(options?.unique){
           //   const unique = arr.filter((value, index) => {
           //     return arr.indexOf(value) === index;
           //   });
        formattedArr = [...new Set(formattedArr)]
        console.log(formattedArr,"foirmatted")
      }
      if(options?.sorted){
        formattedArr.sort();
      }

      if(options?.length){
        console.log(formattedArr,"before splice")
        const removableItems = formattedArr.length - options.length
        formattedArr.splice(-removableItems)
        console.log(formattedArr,"after splice")

      }

    

      let listString = "";

      formattedArr.forEach((str,index) => {
        console.log(str,"inside foreach ")
      if(index === formattedArr.length - 1 && !options?.length){
          console.log(listString,"before listString inside second if");
            listString +=" and " + str;
            console.log(listString,"listString inside second if");

        }else{
          console.log(listString,"before listString inside last if");
            listString += `${index !== 0  ? ", " : ""}` + str;
            console.log(listString,"listString inside last if")

        }
        if(options?.length && index === options?.length - 1){
          console.log(listString,"before listString inside first if");

            const remainingOptions = options.unique ? uniqueItemsLength - options.length : itemsLength - options.length;
            console.log(formattedArr.length,"tems.length")

            console.log(options.length,"options.length")

            console.log(remainingOptions,"remainingOptions")
            listString += " and " + remainingOptions + " other" + `${remainingOptions > 1 ? "s" : ''}`;
            console.log(listString,"listString inside first if");
        }
      })

      return listString;
  }

  // const v = listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);

  const v = 
  listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 100 });


  console.log(v,":final:");