migrate((app) => {
 let collection;
 try { collection = app.findCollectionByNameOrId('enquiries'); } catch (_) {
 collection = new Collection({name:'enquiries',type:'base',listRule:null,viewRule:null,createRule:'',updateRule:null,deleteRule:null,fields:[
 {name:'name',type:'text',required:true,max:200},{name:'company',type:'text',required:true,max:200},{name:'email',type:'email',required:true},{name:'country',type:'text',required:true,max:200},{name:'product',type:'text',required:true,max:200},{name:'quantity',type:'text',required:true,max:200},{name:'specifications',type:'text',required:true,max:10000},{name:'shipping',type:'text',max:2000},{name:'drawings',type:'file',maxSelect:1,maxSize:10485760,protected:true,mimeTypes:['application/pdf','image/jpeg','image/png']},{name:'created',type:'autodate',onCreate:true,onUpdate:false},{name:'updated',type:'autodate',onCreate:true,onUpdate:true}
 ]});app.save(collection);
 }
},(app)=>{app.delete(app.findCollectionByNameOrId('enquiries'));});
