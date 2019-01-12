

class LinkedNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

function mergeLinked(listA,listB){

    let dummy = new LinkedNode(0);
    let l3 = dummy;
    let l2,l1;
    while(l2 && l1){
        if( l1.val <= l2.val){
            l3.next = l1;
            l1 = l1.next;
        }else{
            l3.next = l2;
            l2 = l2.next;
        }
        l3 =l3.next;
    }

    if(l1){
        l3.next = l1;
    }

    if(l2){
        l3.next = l2;
    }

    return dummy.next;
}


module.exports = whiteandblack;
