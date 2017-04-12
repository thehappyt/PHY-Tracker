function parseTrackerFile(f) {
    var i, j, l, m, c=[], txt;
    txt = (f.text).split(/[\r\n]+/);
    for (i=1, l=txt.length; i<l; i++) txt[i]=txt[i].split(",");
    txt.splice(txt.length-1,1);
    c.name=txt[0];
    for (j=0, m=txt[1].length; j<m; j++) { c.push([]); c[j].name=txt[1][j]; }
    for (i=2, l=txt.length, m=c.length; i<l; i++) for (j=0; j<m; j++) c[j].push(1*txt[i][j]);
    for (j=0, m=c.length; j<m; j++) {
        c[j].min=min.apply(null, c[j]); c[j].max=max.apply(null, c[j]);
        c[j].mid=(c[j].min+c[j].max)/2; c[j].dif=(c[j].max-c[j].min)/2;
    }
    return c;
}
