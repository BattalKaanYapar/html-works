var dizi = ["kaan","yapar","poseidon","nemere","direks"];
		
		var aranacakkelime = dizi[3];
		
		document.write("Dizi içeriği: <br>" + dizi + "<br><br>");
 
		var ara = dizi.indexOf(aranacakkelime); 
 
		document.write(aranacakkelime + " değerin index numarası : " + ara +  " <br> <br> ");
        document.write("Shift ve Push Kullanıldıktan sonra")
        dizi.push("Hasan")
        dizi.shift()

        console.log(dizi)

        ara =dizi.indexOf(aranacakkelime);

        document.writeln( "<br></br>" + aranacakkelime + " değerin index numarası :" + ara);