function var_dom_dump(idObjeto){
    let id = '#'+idObjeto;

    //Imprimir atributos
    if($(id).attr('id')!=undefined && $(id).attr('id')!=null && $(id).attr('id')!=''){
        console.log('Objeto: ');
        console.log($(id));
        console.log('Id   : '+$(id).attr('id'));
        if($(id).prop('name')!=undefined && $(id).prop('name')!=null && $(id).prop('name')!=''){
            console.log('Name : '+$(id).prop('name'));
        }

        if($(id).val()!=undefined && $(id).val()!=null && $(id).val()!=''){
            console.log('Value: '+$(id).val());
        }

        if($(id).text()!=undefined && $(id).text()!=null && $(id).text()!=''){
            console.log('Text : '+($(id).text()).trim());
        }

        if($(id).attr('css')!=undefined && $(id).attr('css')!=null && $(id).attr('css')!=''){
            console.log('Css  : '+$(id).attr('css'));
        }
        if($(id).attr('class')!=undefined && $(id).attr('class')!=null && $(id).attr('class')!=''){
            console.log('Class: '+$(id).attr('class'));
        }
    }else{
        console.log('El elemento "'+id+'" no existe en el DOM.');
    }
}
