'use strict'

var paragraph1 = "CERN ATLAS CMS detector neutrino higgs-boson top-quark tracker hadrons muon proton tau photon "
var paragraph2 = "ATOME Noyau leptons quarks";
paragraph1 = paragraph1.toLowerCase();
paragraph2 = paragraph2.toLowerCase();
var paragraph = paragraph1;
var wlist = [];
var hook = 0;

function language(x) {
    wlist = [];
    hook = 0;
    if (x == 0) paragraph = paragraph1;
    else paragraph = paragraph2;
    splitwords();
}

function splitwords() {
    for (var i = 0; i < paragraph.length; i ++) {
        if (paragraph[i] == " ") {
            if (paragraph[i-1] != "." && paragraph[i-1] != ",") {
                var sub = paragraph.substring(hook, i);
                hook = i + 1;
                wlist.push(sub);
            }
            else {
                var sub = paragraph.substring(hook, i-1);
                hook = i + 1;
                wlist.push(sub);
            }
        }
    }
}
