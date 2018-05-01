function Set() {


    this.intersection = function (listA, listB) {

        var resultList = [];
        if (listA !== null && listB !== null) {
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

        resultList.sort();
        return resultList;

    };


    this.union = function (listA, listB) {

        var resultList = [];
        if (listA !== null && listB !== null) {


            let diff = this.symmetricDifference(listA, listB);
            let same = this.intersection(listA, listB);

            diff.forEach(function (i) {
                resultList.push(i);
            });
            same.forEach(function (x) {
                resultList.push(x);
            });

            resultList.sort();


            return resultList;
        } else
            return null;
    };


    this.relativeComplement = function (listA, listB) {

        var resultList = [];

        if (listA !== null && listB !== null) {

            for (var i = 0; i < listA.length; i++) {
                let found = false;
                for (var j = 0; j < listB.length; j++) {
                    if (listA[i] === listB[j]) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    resultList.push(listA[i]);
                }
            }
            resultList.sort();

            return resultList;
        } else
            return null;
    };


    this.symmetricDifference = function (listA, listB) {

        var resultList = [];
        if (listA !== null && listB !== null) {
            let relA = this.relativeComplement(listA, listB);
            let relB = this.relativeComplement(listB, listA);

            relA.forEach(function (item) {
                resultList.push(item);
            });
            relB.forEach(function (itemB) {
                resultList.push(itemB);
            });

            resultList.sort();

            return resultList;
        } else
            return null;
    }


}
