// JavaScript Document
/*
v2 captured group for each regex using dollar sign
v3 added alphanumeric code to html
v4 added emotions to html
v5 to add hint onHover
v6 to add emoticons using i class
v7 to show output onKeyUp - real time
v8 to simplify this script by cutting out repetition
v9 added alphanumberic code to js
v10 added more errors
v11 added more errors
v12 passed emoticon in replace string
v13 moved feedback message to key (added array d)
v14-16 solved colour problems in output text and feedback box (Brevity colour)
v16a added shared vars within Brevity function*
v19 all var c added, emoticon issue in Accuracy with optional items
v20 pass emoticons and code through match and add pop-up advice for brevity
v21 add advice for all regex via pop-ups, solved most clashes added all feedback to span title
STILL problem with undefined abbreviations in Accuracy fn
LATER put multimedia hyperlinks and narrower codes, e.g. B1-1,.A5-1 in orange box for reference*/

function textChange()
{
	clr();
	if(AToggle==1)
		DetectAccuracy(document.f1.sstextbox.value,0,100);
	if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
}
function changeToggleAccuracy()
{
	clr();
	if(AToggle==1)
	{

		AToggle=0;
	if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
	else
	{

	AToggle=1;

	DetectAccuracy(document.f1.sstextbox.value,0,100)
	if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
}
function changeToggleBrevity()
{
	clr();
	if(BToggle==1)
	{

		BToggle=0;
	if(AToggle==1)
	DetectAccuracy(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
	else
	{

	BToggle=1;

	DetectBrevity(document.f1.sstextbox.value,0,100);
	if(AToggle==1)
		DetectAccuracy(document.f1.sstextbox.value,0,100)
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
}
function changeToggleClarity()
{
	clr();
	if(CToggle==1)
	{

		CToggle=0;
	if(AToggle==1)
	DetectAccuracy(document.f1.sstextbox.value,0,100);
    if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
	else
	{

	CToggle=1;
	DetectClarity(document.f1.sstextbox.value,0,100);

	if(AToggle==1)
		DetectAccuracy(document.f1.sstextbox.value,0,100)
    if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
}
function changeToggleObjectivity()
{
	clr();
	if(OToggle==1)
	{

		OToggle=0;
	if(AToggle==1)
	DetectAccuracy(document.f1.sstextbox.value,0,100);
    if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
	else
	{

	OToggle=1;
	DetectObjectivity(document.f1.sstextbox.value,0,100);

	if(AToggle==1)
	DetectAccuracy(document.f1.sstextbox.value,0,100);
    if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(FToggle==1)
	DetectFormality(document.f1.sstextbox.value,0,100);
	}
}
function changeToggleFormality()
{
	clr();
	if(FToggle==1)
	{

		FToggle=0;
	if(AToggle==1)
	DetectAccuracy(document.f1.sstextbox.value,0,100);
    if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
	}
	else
	{

	FToggle=1;
	DetectFormality(document.f1.sstextbox.value,0,100);

	if(AToggle==1)
	DetectAccuracy(document.f1.sstextbox.value,0,100);
    if(BToggle==1)
	DetectBrevity(document.f1.sstextbox.value,0,100);
    if(CToggle==1)
	DetectClarity(document.f1.sstextbox.value,0,100);
    if(OToggle==1)
	DetectObjectivity(document.f1.sstextbox.value,0,100);
	}
}
function DetectAccuracy(mystring, range_min, range_max){

	processedText = '';
  var b = [];
  var c = [];

//Regex array - accuracy
b[1] = /\b(researches|researchs)\b/gi;
b[2] = /\b(one of the|each of the)\b/g;
b[3] = /(\ba\s+hour\b)/gi;
b[4] = /\b(accommodation|clothing|furniture|homework|information|knowledge|lightning|luggage|music|public|slang|training|transportation)s/gi;
b[5] = /\b((are|be|is|was|were) (happened|occurred))\b/gi;
b[6] = /\b(averagely)\b/gi;
b[7] = /\b(that, if)\b/gi;
b[8] = /\b(between\W+(?:\w+\W+){1,2}?to)\b/gi;
b[9] = /\b(more +\w*er\b)/gi; // older regex for b9 is /\b(more(?=\s\w+(er)))\b/gi;
//b[10] = /\b([A-Za-z]+) +\1\b/gi; //clashed with emoticons somehow - improve regex
b[11] = /\b(another +\w*s\b)/gi;
b[12] = /\b(a [aeiou]\w+\b)/gi;
b[13] = /\b(works)\b/gi;
b[14] = /\b(moreover)\b/gi;
b[15] = /\b(despite)\W+(?:\w+\W+){1,3}?(is|are|was|were)\b/gi; //rewrite to capture clause, too
b[16] = /\b([,] although)\b/g;
b[17] = /\b(independent mutually)\b/gi;
b[18] = /\b((can|could|may|might|must|shall|should)(?=\s\w+(ed))\b)/gi;
b[19] = /\b(There (happened|occurred))\b/gi;
b[20] = /\b(I analysis)\b/gi;
b[21] = /\b(I am belong)\b/gi;
b[22] = /\b(It requires also)\b/gi;
b[23] = /\b(much +\w*s)\b/gi;
b[24] = /\b(many +\w*([a-r]|[t-z]+))\b/gi;
b[25] = /\b(datas)\b/gi;
b[26] = /\b(They analysis)\b/gi;
b[27] = /\b(We analysis)\b/gi;
b[28] = /\b(locates near)\b/gi;
b[29] = /\b(each data)\b/gi;
b[30] = /\b(two data)\b/gi;
b[31] = /\b(was did)\b/gi;
b[32] = /\b(can to)\b/gi;
b[33] = /\b(I am belonging)\b/gi;
b[34] = /\b(payed)\b/gi;
b[35] = /\b(each +\w*s)\b/gi;
b[36] = /\b(randam)\b/gi;
b[37] = /\b(mesured)\b/gi;
b[38] = /\b(seve)\b/gi;
b[39] = /\b(as follow)\b/gi;
b[40] = /\b(Also)\b/g;
b[43] = /\b(every +\w*s)\b/gi;
b[44] = /\b(has following)\b/gi;
b[45] = /\b(dicide)\b/gi;
b[46] = /\b(discusstion)\b/gi;
b[47] = /\b(english)\b/g;
b[48] = /\b(almost Japanese)\b/g;
b[49] = /\b(it have)\b/gi;
b[51] = /\b(two main way)\b/gi;
b[52] = /\b(envrionment)\b/gi;
b[53] = /\b(Reference)\b/g;
b[54] = /\b(in spite of)\W+(?:\w+\W+){1,3}?(is|are|was|were)\b/gi;

//Inline replace string array - accuracy
c[1] = '<span title=" The noun \'researches\' is very marked (unnatural). Use the uncountable noun \'research\' or change the word to \'studies\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[2] = '<span title="Check that this phrase is followed by a plural noun.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[3] = '<span title="The first sound in \'hour\' is a vowel sound and so use the article \'an\' not \'a\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[4] = '<span title="This is almost always used as an uncountable noun, so consider deleting the \'s\' at the end and check the agreement with the rest of the sentence.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[5] = '<span title="This is an intransitive verb and so cannot be used in passive voice.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[6] = '<span title="Replace \'averagely\' wtih \'on average\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[7] = '<span title="Delete the misplaced comma.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[8] = '<span title="In formal writing use \'between...and...\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[9] = '<span title="Comparative adjectives use either \'more\' or the suffix \'...er\' but not both.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[10] = '<span title="This word is repeated. Check it is correct.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[11] = '<span title="The determiner \'another\' should be followed by a singular noun, not a plural noun.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[12] = '<span title="Singular nouns that begin with a vowel sound are preceded by a, not an. Check this instance is correct.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[13] = '<span title="The plural noun \'works\' is very marked (unnatural). Use the uncountable noun \'work\' unless referring to works of art or roadworks.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[14] = '<span title="The adverb \'moreover\' is used to introduce information in support of a previous point. Check that this is the intended usage as this word is frequently misused.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[15] = '<span title="The preposition \'despite\' should be followed by a noun phrase, not a clause.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[16] = '<span title="A comma is not usually used before \'although\' and so check there is sufficient reason for it.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[17] = '<span title="The adverb \'mutually\' is commonly placed before the adjective \'indepedent\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[18] = '<span title="The verb following a modal verb cannot take a past tense form. Use present tense, instead.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[19] = '<span title="This verb is intransitive and cannot be followed by an object. Use either \'There was\' to start the sentence or replace \'There\'."' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[20] = '<span title="Replace the noun \'analysis\' with the verb \'analyzed\' or \'analyze\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[21] = '<span title="Delete \'am\' as \'belong\' is a verb.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[22] = '<span title="The adverb \'also\' is frequently used just before main verbs apart from the verb \'be\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[23] = '<span title="Check that there is an uncountable noun. If there is a plural noun, replacing with \'many\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[24] = '<span title="Check that there is a plural noun. If not, consider replacing with \'much\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[25] = '<span title="Either use \'data\' as the plural noun or \'data sets\' if referring to different groups of data.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[26] = '<span title="Replace the noun \'analysis\' with the verb \'analyzed\' or \'analyze\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[27] = '<span title="Replace the noun \'analysis\' with the verb \'analyzed\' or \'analyze\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[28] = '<span title="Replace with passive voice \'is located near\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;;
c[29] = '<span title="Check this is followed by either \'set\' or \'point\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[30] = '<span title="Check this is followed by either \'sets\' or \'points\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[31] = '<span title="If this is passive voice, use \'was done\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[32] = '<span title="The modal verb \'can\' is usually followed by a verb in present tense.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[33] = '<span title="Replace with  \'I belong\' as this is a stative verb that avoids the -ing form.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[34] = '<span title="This past tense form is possible, but rarely used. Replace with  \'paid\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[35] = '<span title="Check that the determiner \'each\' is followed by a singular noun.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[36] = '<span title="Most probably this should be \'random\'">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[37] = '<span title="Most probably this should be \'measured\'. Use a spellchecker!">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[38] = '<span title="Most probably this should be \'save\' Use a spellchecker!">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[39] = '<span title="Replace with \'as follows\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[40] = '<span title="We avoid using \'Also\' at the beginning of a sentence. If the main verb of this sentence is  \'be\'. place \'also\' immediately after it, e.g. \'This is also a problem\'. If the main verb of this sentence is  not \'be\', place \'also\' immediately before it, e.g. \'This can also help\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[43] = '<span title="Check that the noun following \'every\' is singular.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[44] = '<span title="Replace with \'has the following\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[45] = '<span title="Most probably this should be \'decide\'. Use a spellchecker!">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[46] = '<span title="This should be \'discussion\'. Use a spellchecker!">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[47] = '<span title="This word starts with a capital letter: \'English\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[48] = '<span title="If you mean nearly all Japanese, replace with \'almost all Japanese\'">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[49] = '<span title="The subject and verb do not agree. Replace with \'it has\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[51] = '<span title="Plural numbers should be followed by plural nouns. Replace with \'two main ways\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[52] = '<span title="Most probably this should be \'environment\'. Use a spellchecker!">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[53] = '<span title="Assuming this is a section heading, and if there is only one reference, this is correct. If not, use the plural \'References\'.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
c[54] = '<span title="The preposition \'in spite of\' should be followed by a noun phrase, not a clause.">' + accuracyCheck + 'A5 ' + italicGroup + '</span>' ;
//Variables for script block
var a = [textSharer()];
var i;
var l = a.length;
var j;
var ll = b.length;

for (i = 0; i < l; i ++ ) { //start code block for loop 1
	for (j = range_min; j < range_max; j ++ ) {
		 if (a[i].search(b[j]) != -1) {
	      	 a[i] = a[i].replace(b[j],c[j]);
	        }
	   }
	} //end loop

for(i = 0 ; i < l ; i ++ ) { //start code block for loop 2
	    processedText += (a[i] + ' ');
	} //end loop
              document.getElementById("output").innerHTML = processedText;
     shareText=processedText;


}
function DetectBrevity(mystring, range_min, range_max){
	processedText = '';
  var b = [];
  var c = [];
   var d=[];
  var Delete = ' Consider deleting <i>';
  var replace = ' Consider replacing <i>';

//Regex array - brevity
b[2] = /\b(and so on)\b/g;
b[3] = /\b(and so forth)\b/g;
b[6] = /\b(day by day)\b/gi;
b[7] = /\b(little by little)\b/gi;
b[8] = /\b(step by step)\b/gi;
b[9] = /\b(I think)\b/gi;
b[10] = /\b(I do not think)\b/gi;
b[11] = /\b(see\W+(?:\w+\W+){1,4}?with your eyes)\b/gi;
b[12] = /\b(each and every)\b/gi;
b[13] = /\b(general public)\b/gi;
b[14] = /\b(join together)\b/gi;
b[15] = /\b(due to the fact that)\b/gi;
b[16] = /\b(whether or not)\b/gi;
b[17] = /\b(comprise of)\b/gi;
b[18] = /\b(all of the)\b/gi;
b[19] = /\b(his or her)\b/gi;
b[20] = /\b(discuss about)\b/g;

//Inline replace string array - brevity
c[2] = '<span title="Consider replacing \'X, Y and so on\' with \'such as X and Y\'.">' + brevityCheck + ' B1-1'+ italicGroup + '</span>' ;
c[3] = '<span title="Consider replacing \'X, Y and so forth\' with \'such as X and Y\'.">' + brevityCheck + 'B1-1 '+ italicGroup + '</span>' ;
c[6] = '<span title="Replace with \'daily\' and save two words.">' + brevityCheck + 'B2-1 '+ italicGroup + '</span>' ;
c[7] = '<span title="Replace with \'gradually\' and save two words.">' + brevityCheck + 'B2-2 '+ italicGroup + '</span>' ;
c[8] = '<span title="Replace with \'incrementally\' and save two words.">' + brevityCheck + 'B2-3 '+ italicGroup + '</span>' ;
c[9] = '<span title="This phrase is redundant. Delete and save two words.">' + brevityCheck + ' B3-2' + italicGroup + '</span>' ;
c[10] = '<span title="Delete \'I do not think\' and add \'not\' to the following clause.">' + brevityCheck + 'B3-3'+ italicGroup + '</span>' ;
c[11] = '<span title="Delete \'with your eyes\' as it is obvious, and check whether a verb like \'notice\' is more suitable.">' + brevityCheck + 'B3-4 ' + italicGroup + '</span>' ;
c[12] = '<span title="Delete \'and every\'.">' + brevityCheck + 'B3-5 '+ italicGroup + '</span>' ;
c[13] = '<span title="Delete \'general\'.">' + brevityCheck + 'B3-6 ' + italicGroup + '</span>' ;
c[14] = '<span title="Delete \'together\'.">' + brevityCheck + 'B3-7 '+ italicGroup + '</span>' ;
c[15] = '<span title="Replace with \'because\' to save four words.">' + brevityCheck + 'B3-7 ' + italicGroup + '</span>' ;
c[16] = '<span title="Delete \'or not\' to save two words.">' + brevityCheck + 'B3-7 ' + italicGroup + '</span>' ;
c[17] = '<span title="Delete the preposition \'of\'.">' + brevityCheck + 'B3-1 '+ italicGroup + '</span>' ;
c[18] = '<span title="Delete the preposition \'of\'.">' + brevityCheck + 'B3-1 ' + italicGroup + '</span>' ;
c[20] = '<span title="In formal English, the preposition \'about\' is usually avoided..">' + brevityCheck + 'B3-1 '+ italicGroup + '</span>' ;

//Variables for script block
var a = [textSharer()];
var i;
var l = a.length;
var j;
var ll = b.length;

for (i = 0; i < l; i ++ ) { //start code block for loop 1
	for (j = range_min; j < range_max; j ++ ) {
		 if (a[i].search(b[j]) != -1) {
	      	 a[i] = a[i].replace(b[j],c[j]);
	        }
	   }
	} //end loop

for(i = 0 ; i < l ; i ++ ) { //start code block for loop 2
	    processedText += (a[i] + ' ');
	} //end loop
              document.getElementById("output").innerHTML = processedText;
     shareText=processedText;


}
function DetectClarity(mystring, range_min, range_max){

	processedText = '';
  var b = [];
  var c = [];

//Regex array - clarity
b[1] = /\b(thing)\b/gi;
b[2] = /\b(something)\b/gi;
b[3] = /\b(good|bad|nice)\b/gi;
b[4] = /\b(really)\b/gi;
b[6] = /\b(etc|etcetera)/gi;
b[7] = /\b(get|got|gotten)\b/gi;
b[8] = /\b(he|she|they|them)\b/gi;
b[9] = /\b(researchers say)\b/gi;
b[10] = /\b(it is said)\b/gi;
b[11] = /\b(very long time)\b/gi;
b[12] = /\b(somebody|someone)\b/gi;
b[13] = /\b(things)\b/gi;
//b[14] = /\b(do|did|done)\b/gi; //rewrite to limit to main verb and not followed by article (a|an)

//Inline replace string array - clarity
c[1] = '<span title="Replace with a more specific word, such as \'concept, item or idea\'.">' + clarityCheck + ' C1-1'+ italicGroup + '</span>' ;
c[2] = '<span title="Replace with a more specific word, such as \'concept, item or idea\'.">' + clarityCheck + ' C1-1'+ italicGroup + '</span>' ;
c[3] = '<span title="Words like good, bad and nice are ambiguous. Replace with a more specific word or define this adjective.">' + clarityCheck + ' C2-1'+ italicGroup + '</span>' ;
c[4] = '<span title="The adverb \'really\' is ambiguous and informal. Use either \'extremely\' or \'particularly\' to intensify an adjective, or use \'actually\' to focus on an actual situation.">' + clarityCheck + ' C1-2'+ italicGroup + '</span>' ;
c[6] = '<span title="Consider deleting or using \'for example\' or \'for instance\' at the beginning of the list.">' + clarityCheck + ' C1-2'+ italicGroup + '</span>' ;
c[7] = '<span title="Replace with a more specific word, such as \'obtain, receive or award\'.">' + clarityCheck + ' C2-3'+ italicGroup + '</span>' ;
c[8] = '<span title="Pronouns may be ambiguous. If possible, rephrase to avoid the need for personal pronouns or replace the pronoun with a more specific noun.">' + clarityCheck + ' C3-1'+ italicGroup + '</span>' ;
c[9] = '<span title="State the surnames of the researchers or provide a reference to increase clarity.">' + clarityCheck + ' C1-4'+ italicGroup + '</span>' ;
c[10] = '<span title="State the surnames of the researchers or provide a reference to increase clarity.">' + clarityCheck + ' C1-4'+ italicGroup + '</span>' ;
c[11] = '<span title="Rather than referring to a vague period of time, be specific if possible.">' + clarityCheck + ' C1-5'+ italicGroup + '</span>' ;
c[12] = '<span title="Use a more specific word appropriate in this context, such as \'users\', \'students\' or \'researchers\'.">' + clarityCheck + ' C1-3'+ italicGroup + '</span>' ;
c[13] = '<span title="Replace with a more specific word, such as \'concepts, items or ideas\'.">' + clarityCheck + ' C1-1'+ italicGroup + '</span>' ;
//Variables for script block
var a = [textSharer()];
var i;
var l = a.length;
var j;
var ll = b.length;

for (i = 0; i < l; i ++ ) { //start code block for loop 1
	for (j = range_min; j < range_max; j ++ ) {
		 if (a[i].search(b[j]) != -1) {

	      	 a[i] = a[i].replace(b[j],c[j]);

	} //end loop
}
}
for(i = 0 ; i < l ; i ++ ) { //start code block for loop 2
	    processedText += (a[i] + ' ');
	} //end loop
       document.getElementById("output").innerHTML = processedText;
           shareText=processedText;

}
function DetectObjectivity(mystring, range_min, range_max){

	processedText = '';
  var b = [];
  var c = [];
//regex array - objectivity
b[1] = /\b(clearly|obviously)\b/gi;
b[2] = /\b(excellent|perfect|fabulous|fantastic|outstanding|incredible)/gi;
b[3] = /\b(unfortunately|amazing|disappointed|excited|pleased)\b/gi;
b[4] = /\b(at last|eventually)\b/gi;
b[5] = /\b(you|your|yours|yourself)\b/gi;

//Inline replace string array - objectivity
c[1] = '<span title="This adverb is subjective, and so it is likely others do not share  the same view. Consider rephrasing."' + objectivityCheck + 'O2-1 ' + italicGroup + '</span>' ;
c[2] = '<span title="This adjective is subjective and  unclear. Replace with a more precise term.">' + objectivityCheck + 'O2-2 ' + italicGroup + '</span>' ;
c[3] = '<span title="To increase the perception of objectivity avoid emotive terms. Focus on the research not feelings.">' + objectivityCheck + 'O2-3 ' + italicGroup + '</span>' ;
c[4] = '<span title="To increase the perception of objectivity avoid emotive terms.">' + objectivityCheck + 'O2-4 ' + italicGroup + '</span>' ;
c[5] = '<span title="Avoid using \'you\',\'your\',\'yours\' or \'yourself\' in scientific writing. These terms are both unclear and personal.">' + objectivityCheck + 'O3-1 ' + italicGroup + '</span>' ;
//Variables for script block
var a = [textSharer()];
var i;
var l = a.length;
var j;
var ll = b.length;

for (i = 0; i < l; i ++ ) { //start code block for loop 1
	for (j = range_min; j < range_max; j ++ ) {
		 if (a[i].search(b[j]) != -1) {
	      	 a[i] = a[i].replace(b[j],c[j]);
	        }
	   }
	} //end loop

for(i = 0 ; i < l ; i ++ ) { //start code block for loop 2
	    processedText += (a[i] + ' ');
	} //end loop
        document.getElementById("output").innerHTML = processedText;
    shareText=processedText;

}
function DetectFormality(mystring, range_min, range_max){

	processedText = '';
  var b = [];
  var c = [];
//regex array - formality
b[0] = /\b(it's)\b/gi;
b[1] = /\b(that's)\b/gi;
b[2] = /\b(couldn't)\b/gi;
b[3] = /\b(can't)\b/gi;
b[4] = /\b(we're)\b/gi;
b[5] = /\b(don't)\b/gi;
b[6] = /\b(didn't)\b/gi;
b[7] = /\b(doesn't)\b/gi;
b[8] = /\b(haven't)b/gi;
b[9] = /\b(hasn't)\b/gi;
b[10] = /\b(hadn't)\b/gi;
b[11] = /\b(you're)\b/gi;
b[12] = /\b(kicked out)\b/gi;
b[13] = /\b(found out)\b/gi;
b[14] = /\b(ASAP)\b/gi;
b[15] = /\b(find out)\b/gi;
b[16] = /\b(have not been +\w* yet)\b/gi;
b[17] = /(`\w+)\b/gi;
b[18] = /\b(lots of)\b/gi;
b[19] = /\b(a lot of)\b/gi;
b[20] = /\b(right) after\b/gi;
b[21] = /\b(right) before\b/gi;
b[22] = /\b(straight) after\b/gi;
b[23] = /\b(straight) before\b/gi;
b[24] = /\b(And)\b/g;
b[25] = /\b(So)\b/g;
b[26] = /\b(But)\b/g;
b[27] = /\b(plenty of)\b/gi;
b[28] = /\b(has not been +\w* yet)\b/gi;
b[29] = /\b(little bit)\b/gi;
b[30] = /\b(That is why)\b/gi;
b[31] = /\b(often)\b/gi;
b[32] = /\b(sometimes)\b/gi;
b[33] = /\b(happen)\b/gi;

//add cliches
//add more phrasal verbs
//Inline replace string array - formality
c[0] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[1] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[2] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[3] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[4] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[5] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[6] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[7] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[8] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[9] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[10] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[11] = '<span title="Apostrophes to indicate the omission of a letter or letters are rather informal. Use the full form.\'.">' + formalityCheck  + 'F1 ' + italicGroup + '</span>' ;
c[12] = '<span title="Phrasal verbs tend to be rather informal. Replace with a more formal verb, such as \'ejected\'.">' + formalityCheck  + 'F3 ' + italicGroup + '</span>' ;
c[13] = '<span title="Phrasal verbs tend to be rather informal. Replace with a more formal verb, such as \'discovered\'.">' + formalityCheck  + 'F3 ' + italicGroup + '</span>' ;
c[14] = '<span title="Use the full form.">' + formalityCheck  + 'F3 ' + italicGroup + '</span>' ;
c[15] = '<span title="Phrasal verbs tend to be rather informal. Replace with a more formal verb, such as \'discover\'.">' + formalityCheck  + 'F3 ' + italicGroup + '</span>' ;
c[16] = '<span title="This is slightly informal. Replace with \'have not yet been ...\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[17] = '<span title="Replace the Japanese apostrophe with a  Western one \'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[18] = '<span title="\'lots of\' in rather informal. Use either \'much\' before uncountable nouns or \'many\' before plural nouns.  In some cases,to avoid repetition of \'much\' or \'many\', \'lots of\' may be acceptable.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[19] = '<span title="\'a lot of\' is rather informal. Consider using \'a large number of\' with plural nouns or \'a large amount of\' with uncountable nouns.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[20] = '<span title="\'right\' is quite informal. Replace with \'immediately\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[21] = '<span title="\'right\' is quite informal. Replace with \'immediately\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[22] = '<span title="\'straight\' is quite informal. Replace with \'immediately\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[23] = '<span title="\'straight\' is quite informal. Replace with \'immediately\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[24] = '<span title="Although it is grammatically correct, a number of supervisors, reviewers and editors may view it negatively. Consider using \'In addition,\' instead.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[25] = '<span title="Although it is grammatically correct, a number of supervisors, reviewers and editors may view it negatively. Consider using \'Therefore,\' instead.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[26] = '<span title="Although it is grammatically correct, a number of supervisors, reviewers and editors may view it negatively. Consider using \'However,\' instead.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[27] = '<span title="\'plenty of\' is  informal. Replace with \'much\' before uncountable nouns or \'many\' before plural nouns.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[28] = '<span title="This is slightly informal. Replace with \'has not yet been ...\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[29] = '<span title="When used before a noun, replace with the more formal adjective \'minor\'. When used before an adjective, delete \'bit\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[30] = '<span title="This phrase is rather informal. Replace with a more formal phrase such as \'For this reason,\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[31] = '<span title="\'often\' is quite informal. Consider replacing with \'frequently\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[32] = '<span title="\'sometimes\' is quite informal. Consider replacing with \'occasionally\'.">' + formalityCheck  + 'F4 ' + italicGroup + '</span>' ;
c[33] = '<span title="\'happen\'is slightly informal. Replace with \'occur\'.">' + formalityCheck  + 'F6 ' + italicGroup + '</span>' ;
//Variables for script block
var a = [textSharer()];
var i;
var l = a.length;
var j;
var ll = b.length;

for (i = 0; i < l; i ++ ) { //start code block for loop 1
	for (j = range_min; j < range_max; j ++ ) {
		 if (a[i].search(b[j]) != -1) {
	      	 a[i] = a[i].replace(b[j],c[j]);
	        }
	   }
	} //end loop

for(i = 0 ; i < l ; i ++ ) { //start code block for loop 2
	    processedText += (a[i] + ' ');
	} //end loop
            document.getElementById("output").innerHTML = processedText;
    shareText=processedText;

}
function textSharer(){
  if(progress==0){
    progress=1;
    document.getElementById("introduction").innerHTML = intro;
   return  document.f1.sstextbox.value;
  }
  else return shareText;
}

function clr(){
document.getElementById("output").innerHTML = "";
document.getElementById("output1").innerHTML = "";
document.getElementById("output2").innerHTML = "";
document.getElementById("output3").innerHTML = "";
document.getElementById("introduction").innerHTML = "";
alreadyDA=0;
alreadyDB=0;
alreadyDC=0;
alreadyDO=0;
alreadyDF=0;
progress=0;


}
var AToggle=1;
var BToggle=1;
var CToggle=1;
var OToggle=1;
var FToggle=1;
var shareText;
var alreadyDA = 0;
var alreadyDB = 0;
var alreadyDC = 0;
var alreadyDO = 0;
var alreadyDF = 0;
var progress = 0;

// Inline string replace vars
var accuracyCheck = '<span style=\"background-color:#ffff66;\"><font color="black"><b>Accuracy check:</span> </b><i class="em em-owl"></i><b>'; //some error here when regex contains options
var brevityCheck = '<span style=\"background-color:#ffb366;\"><font color="black"><b>Brevity check:</span> </b><i class="em em-busts_in_silhouette"></i><b>';
var clarityCheck = '<span style=\"background-color:#c0e769;\"><font color="black"><b>Clarity check:</span> </b><i class="em em-radio_button"></i><b>';
var objectivityCheck = '<span style=\"background-color:#69e4e7;\"><font color="black"><b>Objectivity check:</span> </b><i class="em em-grinning_face_with_one_large_and_one_small_eye"></i><b>';
var formalityCheck = '<span style=\"background-color:#B19CD9;\"><font color="black"><b>Formality check:</span> </b><i class="em em-beer"></i><b>';

//Feedback box string vars
var accuracyCheck1 = '<font color="black"><i class="em em-owl"></i>'; //some error here when regex contains options
var brevityCheck1 = '<font color="black"><i class="em em-busts_in_silhouette"></i>';
var clarityCheck1 = '<font color="black"><i class="em em-radio_button"></i>';
var objectivityCheck1 = '<font color="black"><i class="em em-grinning_face_with_one_large_and_one_small_eye"></i>';
var formalityCheck1 = '<font color="black"><i class="em em-beer"></i>';

// error detector colour arrays
var accuracyColour = '</font><font color="black"><span style="background-color:#ffff66;"><i>';
var brevityColour = '</font><font color="black"><span style="background-color:#ffb366;"><i>';
var clarityColour = '</font><font color="black"><span style="background-color:#c0e769;"><i>';
var objectivityColour = '</font><font color="black"><span style="background-color:#69e4e7;"><i>';
var formalityColour = '</font><font color="black"> <span style="background-color:#B19CD9;"><i>';

// shared arrays
var italicGroup = '<font color="red"><i>\'$1\'</i></b><font color="black">';
var endColour = '</i></u></span>'
var endColourOnly = '</u></span>'
var intro ="<h3 align=\"left\">Automated feedback</h3><p align=\"left\"> The potential errors are highlighted according to the following colour scheme: <i>&nbsp;<span style=\"background-color:#ffff66;\"> Accuracy errors </span>&nbsp;<span style=\"background-color:#ffb366;\"> Brevity errors </span> &nbsp;<span style=\"background-color:#c0e769;\"> Clarity errors </span> &nbsp;<span style=\"background-color:#69e4e7;\"> Objectivity errors </span>&nbsp;<span style=\"background-color:#B19CD9;\"> Formality errors</span></i>. Advice will appear when cursor is placed over error. </p></body>"

// shared feedback arrays

function mouseout(){
  document.getElementById("intro").innerText="Explanations of the buttons appear here.";
}
function mouseover1(){
  document.getElementById("intro").innerText = "Checks for common grammar, vocabulary, spelling and other errors";
}

function mouseover2(){
  document.getElementById("intro").innerText ="Checks for repetition and redundancy";
}

function mouseover3(){
  document.getElementById("intro").innerText = "Checks for vagueness and ambiguity";
}

function mouseover4(){
  document.getElementById("intro").innerText = "Checks for excessive personalization, focus on feelings and emotive words";
}

function mouseover5(){
  document.getElementById("intro").innerText = "Checks for informal language and inappropriate style";
}