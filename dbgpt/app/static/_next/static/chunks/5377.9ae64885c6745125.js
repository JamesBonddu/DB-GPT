"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5377],{15377:function(e,t,n){n.r(t),n.d(t,{CompletionAdapter:function(){return tr},DefinitionAdapter:function(){return tg},DiagnosticsAdapter:function(){return tn},DocumentColorAdapter:function(){return tk},DocumentFormattingEditProvider:function(){return tv},DocumentHighlightAdapter:function(){return td},DocumentLinkAdapter:function(){return tm},DocumentRangeFormattingEditProvider:function(){return t_},DocumentSymbolAdapter:function(){return tp},FoldingRangeAdapter:function(){return tb},HoverAdapter:function(){return tu},ReferenceAdapter:function(){return th},RenameAdapter:function(){return tf},SelectionRangeAdapter:function(){return ty},WorkerManager:function(){return e5},fromPosition:function(){return ti},fromRange:function(){return to},setupMode:function(){return tx},setupMode1:function(){return tC},toRange:function(){return ta},toTextEdit:function(){return ts}});var r,i,o,a,s,u,c,d,g,l,h,f,p,m,v,_,w,k,b,y,E,C,x,A,I,S,R,P,D,T,M,F,L,j,O,N,W,U,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,et,en,er,ei,eo,ea,es,eu,ec,ed,eg,el,eh,ef,ep,em,ev,e_,ew,ek,eb,ey,eE,eC,ex,eA,eI,eS,eR,eP,eD,eT,eM,eF,eL,ej,eO,eN,eW,eU,eV,eH,eK,ez,eX,eB,e$,eq,eQ,eG,eJ,eY,eZ,e0,e1=n(4576),e2=Object.defineProperty,e4=Object.getOwnPropertyDescriptor,e7=Object.getOwnPropertyNames,e3=Object.prototype.hasOwnProperty,e6=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of e7(t))e3.call(e,i)||i===n||e2(e,i,{get:()=>t[i],enumerable:!(r=e4(t,i))||r.enumerable});return e},e8={};e6(e8,e1,"default"),r&&e6(r,e1,"default");var e5=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=e8.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(e=>{t=e}).then(t=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(e=>t)}};(i=J||(J={})).MIN_VALUE=-2147483648,i.MAX_VALUE=2147483647,(o=Y||(Y={})).MIN_VALUE=0,o.MAX_VALUE=2147483647,(a=Z||(Z={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=Y.MAX_VALUE),t===Number.MAX_VALUE&&(t=Y.MAX_VALUE),{line:e,character:t}},a.is=function(e){return e0.objectLiteral(e)&&e0.uinteger(e.line)&&e0.uinteger(e.character)},(s=ee||(ee={})).create=function(e,t,n,r){if(e0.uinteger(e)&&e0.uinteger(t)&&e0.uinteger(n)&&e0.uinteger(r))return{start:Z.create(e,t),end:Z.create(n,r)};if(Z.is(e)&&Z.is(t))return{start:e,end:t};throw Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},s.is=function(e){return e0.objectLiteral(e)&&Z.is(e.start)&&Z.is(e.end)},(u=et||(et={})).create=function(e,t){return{uri:e,range:t}},u.is=function(e){return e0.defined(e)&&ee.is(e.range)&&(e0.string(e.uri)||e0.undefined(e.uri))},(c=en||(en={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},c.is=function(e){return e0.defined(e)&&ee.is(e.targetRange)&&e0.string(e.targetUri)&&(ee.is(e.targetSelectionRange)||e0.undefined(e.targetSelectionRange))&&(ee.is(e.originSelectionRange)||e0.undefined(e.originSelectionRange))},(d=er||(er={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},d.is=function(e){return e0.numberRange(e.red,0,1)&&e0.numberRange(e.green,0,1)&&e0.numberRange(e.blue,0,1)&&e0.numberRange(e.alpha,0,1)},(g=ei||(ei={})).create=function(e,t){return{range:e,color:t}},g.is=function(e){return ee.is(e.range)&&er.is(e.color)},(l=eo||(eo={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},l.is=function(e){return e0.string(e.label)&&(e0.undefined(e.textEdit)||ef.is(e))&&(e0.undefined(e.additionalTextEdits)||e0.typedArray(e.additionalTextEdits,ef.is))},(h=ea||(ea={})).Comment="comment",h.Imports="imports",h.Region="region",(f=es||(es={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return e0.defined(n)&&(o.startCharacter=n),e0.defined(r)&&(o.endCharacter=r),e0.defined(i)&&(o.kind=i),o},f.is=function(e){return e0.uinteger(e.startLine)&&e0.uinteger(e.startLine)&&(e0.undefined(e.startCharacter)||e0.uinteger(e.startCharacter))&&(e0.undefined(e.endCharacter)||e0.uinteger(e.endCharacter))&&(e0.undefined(e.kind)||e0.string(e.kind))},(p=eu||(eu={})).create=function(e,t){return{location:e,message:t}},p.is=function(e){return e0.defined(e)&&et.is(e.location)&&e0.string(e.message)},(m=ec||(ec={})).Error=1,m.Warning=2,m.Information=3,m.Hint=4,(v=ed||(ed={})).Unnecessary=1,v.Deprecated=2,(eg||(eg={})).is=function(e){return null!=e&&e0.string(e.href)},(_=el||(el={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return e0.defined(n)&&(a.severity=n),e0.defined(r)&&(a.code=r),e0.defined(i)&&(a.source=i),e0.defined(o)&&(a.relatedInformation=o),a},_.is=function(e){var t;return e0.defined(e)&&ee.is(e.range)&&e0.string(e.message)&&(e0.number(e.severity)||e0.undefined(e.severity))&&(e0.integer(e.code)||e0.string(e.code)||e0.undefined(e.code))&&(e0.undefined(e.codeDescription)||e0.string(null===(t=e.codeDescription)||void 0===t?void 0:t.href))&&(e0.string(e.source)||e0.undefined(e.source))&&(e0.undefined(e.relatedInformation)||e0.typedArray(e.relatedInformation,eu.is))},(w=eh||(eh={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return e0.defined(n)&&n.length>0&&(i.arguments=n),i},w.is=function(e){return e0.defined(e)&&e0.string(e.title)&&e0.string(e.command)},(k=ef||(ef={})).replace=function(e,t){return{range:e,newText:t}},k.insert=function(e,t){return{range:{start:e,end:e},newText:t}},k.del=function(e){return{range:e,newText:""}},k.is=function(e){return e0.objectLiteral(e)&&e0.string(e.newText)&&ee.is(e.range)},(b=ep||(ep={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},b.is=function(e){return void 0!==e&&e0.objectLiteral(e)&&e0.string(e.label)&&(e0.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(e0.string(e.description)||void 0===e.description)},(em||(em={})).is=function(e){return"string"==typeof e},(y=ev||(ev={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},y.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},y.del=function(e,t){return{range:e,newText:"",annotationId:t}},y.is=function(e){return ef.is(e)&&(ep.is(e.annotationId)||em.is(e.annotationId))},(E=e_||(e_={})).create=function(e,t){return{textDocument:e,edits:t}},E.is=function(e){return e0.defined(e)&&ex.is(e.textDocument)&&Array.isArray(e.edits)},(C=ew||(ew={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},C.is=function(e){return e&&"create"===e.kind&&e0.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||e0.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||e0.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||em.is(e.annotationId))},(x=ek||(ek={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},x.is=function(e){return e&&"rename"===e.kind&&e0.string(e.oldUri)&&e0.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||e0.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||e0.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||em.is(e.annotationId))},(A=eb||(eb={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},A.is=function(e){return e&&"delete"===e.kind&&e0.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||e0.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||e0.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||em.is(e.annotationId))},(ey||(ey={})).is=function(e){return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every(function(e){return e0.string(e.kind)?ew.is(e)||ek.is(e)||eb.is(e):e_.is(e)}))};var e9=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=ef.insert(e,t):em.is(n)?(i=n,r=ev.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=ev.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=ef.replace(e,t):em.is(n)?(i=n,r=ev.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=ev.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=ef.del(e):em.is(t)?(r=t,n=ev.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=ev.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw Error("Text edit change is not configured to manage change annotations.")},e}(),te=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(em.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw Error("Id "+n+" is already in use.");if(void 0===t)throw Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new te(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(function(e){if(e_.is(e)){var n=new e9(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new e9(e.changes[n]);t._textEditChanges[n]=r})):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(ex.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new e9(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[e];if(!n){var r=[];this._workspaceEdit.changes[e]=r,n=new e9(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new te,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(ep.is(t)||em.is(t)?r=t:n=t,void 0===r?i=ew.create(e,n):(o=em.is(r)?r:this._changeAnnotations.manage(r),i=ew.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){var i,o,a;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(ep.is(n)||em.is(n)?i=n:r=n,void 0===i?o=ek.create(e,t,r):(a=em.is(i)?i:this._changeAnnotations.manage(i),o=ek.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(ep.is(t)||em.is(t)?r=t:n=t,void 0===r?i=eb.create(e,n):(o=em.is(r)?r:this._changeAnnotations.manage(r),i=eb.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(I=eE||(eE={})).create=function(e){return{uri:e}},I.is=function(e){return e0.defined(e)&&e0.string(e.uri)},(S=eC||(eC={})).create=function(e,t){return{uri:e,version:t}},S.is=function(e){return e0.defined(e)&&e0.string(e.uri)&&e0.integer(e.version)},(R=ex||(ex={})).create=function(e,t){return{uri:e,version:t}},R.is=function(e){return e0.defined(e)&&e0.string(e.uri)&&(null===e.version||e0.integer(e.version))},(P=eA||(eA={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},P.is=function(e){return e0.defined(e)&&e0.string(e.uri)&&e0.string(e.languageId)&&e0.integer(e.version)&&e0.string(e.text)},(D=eI||(eI={})).PlainText="plaintext",D.Markdown="markdown",(T=eI||(eI={})).is=function(e){return e===T.PlainText||e===T.Markdown},(eS||(eS={})).is=function(e){return e0.objectLiteral(e)&&eI.is(e.kind)&&e0.string(e.value)},(M=eR||(eR={})).Text=1,M.Method=2,M.Function=3,M.Constructor=4,M.Field=5,M.Variable=6,M.Class=7,M.Interface=8,M.Module=9,M.Property=10,M.Unit=11,M.Value=12,M.Enum=13,M.Keyword=14,M.Snippet=15,M.Color=16,M.File=17,M.Reference=18,M.Folder=19,M.EnumMember=20,M.Constant=21,M.Struct=22,M.Event=23,M.Operator=24,M.TypeParameter=25,(F=eP||(eP={})).PlainText=1,F.Snippet=2,(eD||(eD={})).Deprecated=1,(L=eT||(eT={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},L.is=function(e){return e&&e0.string(e.newText)&&ee.is(e.insert)&&ee.is(e.replace)},(j=eM||(eM={})).asIs=1,j.adjustIndentation=2,(eF||(eF={})).create=function(e){return{label:e}},(eL||(eL={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(O=ej||(ej={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},O.is=function(e){return e0.string(e)||e0.objectLiteral(e)&&e0.string(e.language)&&e0.string(e.value)},(eO||(eO={})).is=function(e){return!!e&&e0.objectLiteral(e)&&(eS.is(e.contents)||ej.is(e.contents)||e0.typedArray(e.contents,ej.is))&&(void 0===e.range||ee.is(e.range))},(eN||(eN={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(eW||(eW={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return e0.defined(t)&&(i.documentation=t),e0.defined(n)?i.parameters=n:i.parameters=[],i},(N=eU||(eU={})).Text=1,N.Read=2,N.Write=3,(eV||(eV={})).create=function(e,t){var n={range:e};return e0.number(t)&&(n.kind=t),n},(W=eH||(eH={})).File=1,W.Module=2,W.Namespace=3,W.Package=4,W.Class=5,W.Method=6,W.Property=7,W.Field=8,W.Constructor=9,W.Enum=10,W.Interface=11,W.Function=12,W.Variable=13,W.Constant=14,W.String=15,W.Number=16,W.Boolean=17,W.Array=18,W.Object=19,W.Key=20,W.Null=21,W.EnumMember=22,W.Struct=23,W.Event=24,W.Operator=25,W.TypeParameter=26,(eK||(eK={})).Deprecated=1,(ez||(ez={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(U=eX||(eX={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},U.is=function(e){return e&&e0.string(e.name)&&e0.number(e.kind)&&ee.is(e.range)&&ee.is(e.selectionRange)&&(void 0===e.detail||e0.string(e.detail))&&(void 0===e.deprecated||e0.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))},(V=eB||(eB={})).Empty="",V.QuickFix="quickfix",V.Refactor="refactor",V.RefactorExtract="refactor.extract",V.RefactorInline="refactor.inline",V.RefactorRewrite="refactor.rewrite",V.Source="source",V.SourceOrganizeImports="source.organizeImports",V.SourceFixAll="source.fixAll",(H=e$||(e$={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},H.is=function(e){return e0.defined(e)&&e0.typedArray(e.diagnostics,el.is)&&(void 0===e.only||e0.typedArray(e.only,e0.string))},(K=eq||(eq={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):eh.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},K.is=function(e){return e&&e0.string(e.title)&&(void 0===e.diagnostics||e0.typedArray(e.diagnostics,el.is))&&(void 0===e.kind||e0.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||eh.is(e.command))&&(void 0===e.isPreferred||e0.boolean(e.isPreferred))&&(void 0===e.edit||ey.is(e.edit))},(z=eQ||(eQ={})).create=function(e,t){var n={range:e};return e0.defined(t)&&(n.data=t),n},z.is=function(e){return e0.defined(e)&&ee.is(e.range)&&(e0.undefined(e.command)||eh.is(e.command))},(X=eG||(eG={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},X.is=function(e){return e0.defined(e)&&e0.uinteger(e.tabSize)&&e0.boolean(e.insertSpaces)},(B=eJ||(eJ={})).create=function(e,t,n){return{range:e,target:t,data:n}},B.is=function(e){return e0.defined(e)&&ee.is(e.range)&&(e0.undefined(e.target)||e0.string(e.target))},($=eY||(eY={})).create=function(e,t){return{range:e,parent:t}},$.is=function(e){return void 0!==e&&ee.is(e.range)&&(void 0===e.parent||$.is(e.parent))},(q=eZ||(eZ={})).create=function(e,t,n,r){return new tt(e,t,n,r)},q.is=function(e){return!!(e0.defined(e)&&e0.string(e.uri)&&(e0.undefined(e.languageId)||e0.string(e.languageId))&&e0.uinteger(e.lineCount)&&e0.func(e.getText)&&e0.func(e.positionAt)&&e0.func(e.offsetAt))},q.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;)0>=n(i[a],o[s])?t[u++]=i[a++]:t[u++]=o[s++];for(;a<i.length;)t[u++]=i[a++];for(;s<o.length;)t[u++]=o[s++];return t}(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),u=e.offsetAt(a.range.end);if(u<=i)n=n.substring(0,s)+a.newText+n.substring(u,n.length);else throw Error("Overlapping edit");i=s}return n};var tt=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return Z.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return Z.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();Q=e0||(e0={}),G=Object.prototype.toString,Q.defined=function(e){return void 0!==e},Q.undefined=function(e){return void 0===e},Q.boolean=function(e){return!0===e||!1===e},Q.string=function(e){return"[object String]"===G.call(e)},Q.number=function(e){return"[object Number]"===G.call(e)},Q.numberRange=function(e,t,n){return"[object Number]"===G.call(e)&&t<=e&&e<=n},Q.integer=function(e){return"[object Number]"===G.call(e)&&-2147483648<=e&&e<=2147483647},Q.uinteger=function(e){return"[object Number]"===G.call(e)&&0<=e&&e<=2147483647},Q.func=function(e){return"[object Function]"===G.call(e)},Q.objectLiteral=function(e){return null!==e&&"object"==typeof e},Q.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var tn=class{constructor(e,t,n){this._languageId=e,this._worker=t;let r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent(()=>{window.clearTimeout(t),t=window.setTimeout(()=>this._doValidate(e.uri,n),500)}),this._doValidate(e.uri,n))},i=e=>{e8.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(e8.editor.onDidCreateModel(r)),this._disposables.push(e8.editor.onWillDisposeModel(i)),this._disposables.push(e8.editor.onDidChangeModelLanguage(e=>{i(e.model),r(e.model)})),this._disposables.push(n(e=>{e8.editor.getModels().forEach(e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))})})),this._disposables.push({dispose:()=>{for(let e in e8.editor.getModels().forEach(i),this._listener)this._listener[e].dispose()}}),e8.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,t){this._worker(e).then(t=>t.doValidation(e.toString())).then(n=>{let r=n.map(e=>{let t;return t="number"==typeof e.code?String(e.code):e.code,{severity:function(e){switch(e){case ec.Error:return e8.MarkerSeverity.Error;case ec.Warning:return e8.MarkerSeverity.Warning;case ec.Information:return e8.MarkerSeverity.Info;case ec.Hint:return e8.MarkerSeverity.Hint;default:return e8.MarkerSeverity.Info}}(e.severity),startLineNumber:e.range.start.line+1,startColumn:e.range.start.character+1,endLineNumber:e.range.end.line+1,endColumn:e.range.end.character+1,message:e.message,code:t,source:e.source}}),i=e8.editor.getModel(e);i&&i.getLanguageId()===t&&e8.editor.setModelMarkers(i,t,r)}).then(void 0,e=>{console.error(e)})}},tr=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doComplete(i.toString(),ti(t))).then(n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new e8.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map(e=>{var t,n;let r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(t=e.command)&&"editor.action.triggerSuggest"===t.command?{id:t.command,title:t.title,arguments:t.arguments}:void 0,range:i,kind:function(e){let t=e8.languages.CompletionItemKind;switch(e){case eR.Text:return t.Text;case eR.Method:return t.Method;case eR.Function:return t.Function;case eR.Constructor:return t.Constructor;case eR.Field:return t.Field;case eR.Variable:return t.Variable;case eR.Class:return t.Class;case eR.Interface:return t.Interface;case eR.Module:return t.Module;case eR.Property:break;case eR.Unit:return t.Unit;case eR.Value:return t.Value;case eR.Enum:return t.Enum;case eR.Keyword:return t.Keyword;case eR.Snippet:return t.Snippet;case eR.Color:return t.Color;case eR.File:return t.File;case eR.Reference:return t.Reference}return t.Property}(e.kind)};return e.textEdit&&(void 0!==(n=e.textEdit).insert&&void 0!==n.replace?r.range={insert:ta(e.textEdit.insert),replace:ta(e.textEdit.replace)}:r.range=ta(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(ts)),e.insertTextFormat===eP.Snippet&&(r.insertTextRules=e8.languages.CompletionItemInsertTextRule.InsertAsSnippet),r});return{isIncomplete:n.isIncomplete,suggestions:o}})}};function ti(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function to(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ta(e){if(e)return new e8.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ts(e){if(e)return{range:ta(e.range),text:e.newText}}var tu=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.doHover(r.toString(),ti(t))).then(e=>{if(e){var t;return{range:ta(e.range),contents:(t=e.contents)?Array.isArray(t)?t.map(tc):[tc(t)]:void 0}}})}};function tc(e){return"string"==typeof e?{value:e}:e&&"object"==typeof e&&"string"==typeof e.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}var td=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),ti(t))).then(e=>{if(e)return e.map(e=>({range:ta(e.range),kind:function(e){switch(e){case eU.Read:return e8.languages.DocumentHighlightKind.Read;case eU.Write:return e8.languages.DocumentHighlightKind.Write;case eU.Text:}return e8.languages.DocumentHighlightKind.Text}(e.kind)}))})}},tg=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),ti(t))).then(e=>{if(e)return[tl(e)]})}};function tl(e){return{uri:e8.Uri.parse(e.uri),range:ta(e.range)}}var th=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.findReferences(i.toString(),ti(t))).then(e=>{if(e)return e.map(tl)})}},tf=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doRename(i.toString(),ti(t),n)).then(e=>(function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=e8.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:ta(i.range),text:i.newText}})}return{edits:t}})(e))}},tp=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentSymbols(n.toString())).then(e=>{if(e)return e.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:function(e){let t=e8.languages.SymbolKind;switch(e){case eH.File:return t.Array;case eH.Module:return t.Module;case eH.Namespace:return t.Namespace;case eH.Package:return t.Package;case eH.Class:return t.Class;case eH.Method:return t.Method;case eH.Property:return t.Property;case eH.Field:return t.Field;case eH.Constructor:return t.Constructor;case eH.Enum:return t.Enum;case eH.Interface:return t.Interface;case eH.Function:break;case eH.Variable:return t.Variable;case eH.Constant:return t.Constant;case eH.String:return t.String;case eH.Number:return t.Number;case eH.Boolean:return t.Boolean;case eH.Array:return t.Array}return t.Function}(e.kind),range:ta(e.location.range),selectionRange:ta(e.location.range),tags:[]}))})}},tm=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentLinks(n.toString())).then(e=>{if(e)return{links:e.map(e=>({range:ta(e.range),url:e.target}))}})}},tv=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.format(r.toString(),null,tw(t)).then(e=>{if(e&&0!==e.length)return e.map(ts)}))}},t_=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.format(i.toString(),to(t),tw(n)).then(e=>{if(e&&0!==e.length)return e.map(ts)}))}};function tw(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var tk=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentColors(n.toString())).then(e=>{if(e)return e.map(e=>({color:e.color,range:ta(e.range)}))})}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),t.color,to(t.range))).then(e=>{if(e)return e.map(e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=ts(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ts)),t})})}},tb=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),t)).then(e=>{if(e)return e.map(e=>{let t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case ea.Comment:return e8.languages.FoldingRangeKind.Comment;case ea.Imports:return e8.languages.FoldingRangeKind.Imports;case ea.Region:return e8.languages.FoldingRangeKind.Region}}(e.kind)),t})})}},ty=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),t.map(ti))).then(e=>{if(e)return e.map(e=>{let t=[];for(;e;)t.push({range:ta(e.range)}),e=e.parent;return t})})}},tE=class extends tr{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function tC(e){let t=new e5(e),n=(...e)=>t.getLanguageServiceWorker(...e),r=e.languageId;e8.languages.registerCompletionItemProvider(r,new tE(n)),e8.languages.registerHoverProvider(r,new tu(n)),e8.languages.registerDocumentHighlightProvider(r,new td(n)),e8.languages.registerLinkProvider(r,new tm(n)),e8.languages.registerFoldingRangeProvider(r,new tb(n)),e8.languages.registerDocumentSymbolProvider(r,new tp(n)),e8.languages.registerSelectionRangeProvider(r,new ty(n)),e8.languages.registerRenameProvider(r,new tf(n)),"html"===r&&(e8.languages.registerDocumentFormattingEditProvider(r,new tv(n)),e8.languages.registerDocumentRangeFormattingEditProvider(r,new t_(n)))}function tx(e){let t=[],n=[],r=new e5(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);return!function(){let{languageId:t,modeConfiguration:r}=e;tI(n),r.completionItems&&n.push(e8.languages.registerCompletionItemProvider(t,new tE(i))),r.hovers&&n.push(e8.languages.registerHoverProvider(t,new tu(i))),r.documentHighlights&&n.push(e8.languages.registerDocumentHighlightProvider(t,new td(i))),r.links&&n.push(e8.languages.registerLinkProvider(t,new tm(i))),r.documentSymbols&&n.push(e8.languages.registerDocumentSymbolProvider(t,new tp(i))),r.rename&&n.push(e8.languages.registerRenameProvider(t,new tf(i))),r.foldingRanges&&n.push(e8.languages.registerFoldingRangeProvider(t,new tb(i))),r.selectionRanges&&n.push(e8.languages.registerSelectionRangeProvider(t,new ty(i))),r.documentFormattingEdits&&n.push(e8.languages.registerDocumentFormattingEditProvider(t,new tv(i))),r.documentRangeFormattingEdits&&n.push(e8.languages.registerDocumentRangeFormattingEditProvider(t,new t_(i)))}(),t.push(tA(n)),tA(t)}function tA(e){return{dispose:()=>tI(e)}}function tI(e){for(;e.length;)e.pop().dispose()}}}]);