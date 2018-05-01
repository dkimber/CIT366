function Set() {


    this.intersection = function (listA, listB) {

        var resultList = [];
        if (listA !== null) {
            listA.forEach(function (itemA) {
                if (listB !== null) {
                    listB.forEach(function (itemB) {
                        if (itemB === itemA) {
                            resultList.push(itemB);
                        }
                    })
                }
            });
        } else {
            return null;
        }
        return resultList;

    };


    this.union = function (listA, listB) {

        var resultList = [];
        resultList += this.intersection(listA, listB);
        resultList += this.relativeComplement(listA, listB);
        resultList += this.relativeComplement(listB, listB);

        return resultList;
    };


    this.relativeComplement = function (listA, listB) {

        var resultList = [];

        //use "break;" to end a command in javascript;

        return resultList;
    };


    this.symmetricDifference = function (listA, listB) {

        var resultList = [];
        var temp = this.intersection(listA, listB);
        for(var itemA in listA) {
            let found = false;
            for (var x in temp) {
                if (x === itemA) {
                    found = true;
                    break;
                }
                resultList.push(itemA);
            }
        }
        console.log(resultList);
        return resultList;
    }


}
