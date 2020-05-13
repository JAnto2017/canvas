function creaPDF() {
    var doc = new jsPDF();
    //establece el título 
    doc.setFont("Comic Sans");
    doc.setFontSize(17);
    doc.setTextColor(0, 0, 255);
    doc.setLineWidth(1.5);
    doc.line(5, 12, 280, 12);
    doc.text(105, 10, "Canvas");
    //estable la fecha
    var hoy = new Date();
    var anio = hoy.getFullYear();
    var mes = hoy.getMonth() + 1;
    var dia = hoy.getDate();
    doc.setFontStyle('italic');
    doc.setFontSize(8);
    var fecha = anio + "-" + mes + "-" + dia;
    doc.text(190, 10, fecha);
    //establece el nombre
    var nombre = "José A. Delgado";
    doc.text(10, 10, nombre);
    doc.setFontStyle('normal');
    //------------------------------------------------------------
    //COMPETENCIA CLAVE
    doc.setFontSize(12);
    doc.text(9, 25, "COMPETENCIA CLAVE");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(7, 20, 142, 32, 5, 5);
    doc.setFontSize(8);
    var comCla = document.getElementById('a1').value;
    doc.text(9, 29, comCla);
    //------------------------------------------------------------
    //ESTÁNDAR DE APRENDIZAJE
    doc.setFontSize(12);
    doc.text(9, 60, "ESTÁNDAR DE APRENDIZAJE");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(7, 55, 142, 32, 5, 5);
    doc.setFontSize(8);
    var estApr = document.getElementById('b1').value;
    doc.text(9, 64, estApr);
    //------------------------------------------------------------
    //MÉTODO DE EVALUACIÓN
    doc.setFontSize(12);
    doc.text(9, 95, "MÉTODOS DE EVALUACIÓN");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(7, 90, 112, 90, 5, 5);
    doc.setFontSize(8);
    var metEva = document.getElementById('d1').value;
    doc.text(9, 99, metEva);
    //------------------------------------------------------------
    //RECURSO
    doc.setFontSize(12);
    doc.text(155, 25, "RECURSO");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(152, 20, 55, 67, 5, 5);
    doc.setFontSize(8);
    var recu = document.getElementById('c1').value;
    doc.text(155, 29, recu);
    //------------------------------------------------------------
    //PRODUCTO FINAL
    doc.setFontSize(12);
    doc.text(125, 95, "PRODUCTO FINAL");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(122, 90, 86, 90, 5, 5);
    doc.setFontSize(8);
    var proFin = document.getElementById('e1').value;
    doc.text(125, 99, proFin);
    //------------------------------------------------------------
    //TARÉAS
    doc.setFontSize(12);
    doc.text(9, 188, "TARÉAS");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(7, 183, 112, 67, 5, 5);
    doc.setFontSize(8);
    var tare = document.getElementById('f1').value;
    doc.text(9, 192, tare);
    //------------------------------------------------------------
    //DIFUSIÓN
    doc.setFontSize(12);
    doc.text(9, 258, "DIFUSIÓN");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(7, 253, 112, 40, 5, 5);
    doc.setFontSize(8);
    var difu = document.getElementById('k1').value;
    doc.text(9, 262, difu);
    //------------------------------------------------------------
    //AGRUPAMIENTO - ORGANIZACIÓN
    doc.setFontSize(12);
    doc.text(125, 188, "AGRUPAMIENTOS");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(122, 183, 86, 55, 5, 5);
    doc.setFontSize(8);
    var agru = document.getElementById('g1').value;
    doc.text(125, 192, agru);
    //------------------------------------------------------------
    //HERRAMIENTAS TIC
    doc.setFontSize(12);
    doc.text(125, 246, "HERRAMIENTAS TIC");
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    //(x1,y1) - (largo en X, largo en Y) - (radio curvatura)
    doc.roundedRect(122, 241, 86, 51, 5, 5);
    doc.setFontSize(8);
    var herTic = document.getElementById('m1').value;
    doc.text(125, 250, herTic);
    //------------------------------------------------------------
    doc.save('Test.pdf');
}