function findIntersection(arr1, arr2){

    let commonElements = []
    let count = 0;
    let sameElementIndex = []
    
    for(let i =0; i< arr1.length; i++)
    {
        
        for( let j = 0; j< arr2.length; j++){
            
            if(arr1[i] == arr2[j])
             {   commonElements.push(arr1[i])
                sameElementIndex.push(i)
                sameElementIndex.push(j)
                count = count +1 ;
                
            }
        }
        
    }
    console.log('\n',count, ' elements are same\n')
    console.log('Elements at index\n', sameElementIndex, '\nare common.')
    return commonElements
}
const array1 = [1, 2, 3, 4, 5,89, 90];
const array2 = [4, 5, 6, 7, 8, 89, 90];

 const sameEelemments = findIntersection(array1,array2)

 console.log('The intersection of the arrays is:\n',sameEelemments)