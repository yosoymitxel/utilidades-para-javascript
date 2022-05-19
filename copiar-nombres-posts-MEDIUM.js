function copiar_nombres_posts_medium(){
  //Añadimos jQuery
  var script  = document.createElement('script');
  script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
  
  //Copiamos 
  var titulos = ''
  
  $('h2.bv.he.rq.rr.rs.rt.ru.rv.rw.rx.ry.rz.sa.sb.sc.sd.se.sf.sg.sh.si.sj.sk.sl.sm.sn.so.ct.oz.pa.pc.pd.by').each(function(a,o){
      titulos += $(o).text() + '\n'
  })
  
  console.log(titulos)
}

copiar_nombres_posts_medium();

