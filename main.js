//Separate two digit numbers of given array using while

document.write("Separate two digit numbers of given array using while"+"<br>");
document.write("-----------------------------------------"+"<br><br>");

var a=[7,12,9,10,93,45,234,37,6,100];
document.write("The array elements are:"+a+"<br>");
document.write("The count of array elements :"+a.length+"<br><br>")
document.write("The two digit array elements are:"+"<br>");
let i=0;
while(i<a.length){
    if(a[i]>9 && a[i]<100){
        document.write(a[i]+"<br>");
    }
    i++;
}
