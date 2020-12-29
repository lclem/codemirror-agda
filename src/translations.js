const hint = (cm, self, data) =>
  cm.replaceRange(data.symbol, self.from, self.to);

const cmObj = (k, v) => ({
  text: "\\" + k,
  symbol: v,
  displayText: `${v} \\${k}`,
  hint: hint,
});

const toTable = pairs =>
  pairs.reduce((a, p) => {
    a.push.apply(
      a,
      Array.from(p[1].replace(/\s/g, "")).map(v => cmObj(p[0], v))
    );
    return a;
  }, []).sort((a,b) => a.text.localeCompare(b.text));

// Subset of agda-input-translations + TeX-Input
// TODO Add some more from TeX-Input
// https://github.com/agda/agda/blob/master/src/data/emacs-mode/agda-input.el#L191
export const translations = toTable([
  ["ell", "ℓ"],
  // Equality and similar symbols.
  // ["eq", "=∼∽≈≋∻∾∿≀≃⋍≂≅ ≌≊≡≣≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≍≎≏≬⋕"],
  // ["eqn", "≠≁ ≉     ≄  ≇≆  ≢                 ≭    "],
  // ["=", "="],
  ["=n", "≠"],
  ["~", "∼"],
  ["~n", "≁"],
  ["~~", "≈"],
  ["~~n", "≉"],

  // ["~~~", "≋"],
  // [":~", "∻"],
  ["~-", "≃"],
  ["~-n", "≄"],
  ["-~", "≂"],
  ["~=", "≅"],
  ["~=n", "≇"],
  ["~~-", "≊"],
  ["==", "≡"],
  ["==n", "≢"],
  // ["===", "≣"],
  // [".=", "≐"],
  // [".=.", "≑"],
  // [":=", "≔"],
  // ["=:", "≕"],
  // ["=o", "≗"],
  // ["(=", "≘"],
  // ["and=", "≙"],
  // ["or=", "≚"],
  // ["*=", "≛"],
  // ["t=", "≜"],
  // ["def=", "≝"],
  // ["m=", "≞"],
  // ["?=", "≟"],

  // Inequality and similar symbols.
  //["leq", "<≪⋘≤≦≲ ≶≺≼≾⊂⊆ ⋐⊏⊑ ⊰⊲⊴⋖⋚⋜⋞"],
  //["leqn", "≮  ≰≨≴⋦≸⊀ ⋨⊄⊈⊊  ⋢⋤ ⋪⋬   ⋠"],
  //["geq", ">≫⋙≥≧≳ ≷≻≽≿⊃⊇ ⋑⊐⊒ ⊱⊳⊵⋗⋛⋝⋟"],
  //["geqn", "≯  ≱≩≵⋧≹⊁ ⋩⊅⊉⊋  ⋣⋥ ⋫⋭   ⋡"],
  ["<=", "≤"],
  [">=", "≥"],
  ["<=n", "≰"],
  [">=n", "≱"],
  ["le", "≤"],
  ["ge", "≥"],
  ["len", "≰"],
  ["gen", "≱"],
  ["<n", "≮"],
  [">n", "≯"],
  ["<~", "≲"],
  [">~", "≳"],
  // ["<~n", "⋦"],
  // [">~n", "⋧"],
  // ["<~nn", "≴"],
  // [">~nn", "≵"],
  ["sub", "⊂"],
  ["sup", "⊃"],
  ["subn", "⊄"],
  ["supn", "⊅"],
  ["sub=", "⊆"],
  ["sup=", "⊇"],
  ["sub=n", "⊈"],
  ["sup=n", "⊉"],
  // ["squb", "⊏"],
  // ["squp", "⊐"],
  // ["squb=", "⊑"],
  // ["squp=", "⊒"],
  // ["squb=n", "⋢"],
  // ["squp=n", "⋣"],

  // Set membership etc.
  // ["member", "∈∉∊∋∌∍⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿"],
  ["in", "∈"],
  ["inn", "∉"],
  ["ni", "∋"],
  ["nin", "∌"],

  // Intersections, unions etc.
  // ["intersection", "∩⋂∧⋀⋏⨇⊓⨅⋒∏ ⊼      ⨉"],
  // ["union", "∪⋃∨⋁⋎⨈⊔⨆⋓∐⨿⊽⊻⊍⨃⊎⨄⊌∑⅀"],

  ["and", "∧"],
  ["or", "∨"],
  ["And", "⋀"],
  ["Or", "⋁"],
  // ["i", "∩"],
  // ["un", "∪"],
  // ["u+", "⊎"],
  // ["u.", "⊍"],
  // ["I", "⋂"],
  // ["Un", "⋃"],
  // ["U+", "⨄"],
  // ["U.", "⨃"],
  ["glb", "⊓"],
  ["lub", "⊔"],
  // ["Glb", "⨅"],
  // ["Lub", "⨆"],

  // Entailment etc.
  // ["entails", "⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯"],
  ["|-", "⊢"],
  ["vdash", "⊢"],
  // ["|-n", "⊬"],
  // ["-|", "⊣"],
  // ["|=", "⊨"],
  // ["|=n", "⊭"],
  // ["||-", "⊩"],
  // ["||-n", "⊮"],
  // ["||=", "⊫"],
  // ["||=n", "⊯"],
  // ["|||-", "⊪"],

  // Divisibility, parallelity.
  ["|", "∣"],
  ["|n", "∤"],
  ["||", "∥"],
  ["||n", "∦"],

  // Some symbols from logic and set theory.
  ["all", "∀"],
  ["ex", "∃"],
  ["exn", "∄"],
  ["0", "∅"],
  ["C", "∁"],

  // Corners, ceilings and floors.
  // ["c", "⌜⌝⌞⌟⌈⌉⌊⌋"],
  // ["cu", "⌜⌝  ⌈⌉  "],
  // ["cl", "  ⌞⌟  ⌊⌋"],
  // ["cul", "⌜"],
  ["cuL", "⌈"],
  // ["cur", "⌝"],
  ["cuR", "⌉"],
  // ["cll", "⌞"],
  ["clL", "⌊"],
  // ["clr", "⌟"],
  ["clR", "⌋"],

  // Various operators/symbols.
  ["qed", "∎"],
  ["x", "×"],
  ["o", "∘"],
  ["comp", "∘"],
  [".", "∙"],
  ["*", "⋆"],
  // [".+", "∔"],
  // [".-", "∸"],
  // [":", "∶⦂ː꞉˸፥፦：﹕︓"],
  // [",", "ʻ،⸲⸴⹁⹉、︐︑﹐﹑，､"],
  // [";", "؛⁏፤꛶；︔﹔⍮⸵;"],
  ["::", "∷"],
  // ["::-", "∺"],
  // ["-:", "∹"],
  // ["+ ", "⊹"],
  // ["surd3", "∛"],
  // ["surd4", "∜"],
  // ["increment", "∆"],
  ["inf", "∞"],
  // ["&", "⅋"],
  ["top", "⊤"],
  ["bot", "⊥"],
  ["neg", "¬"],

  // Circled operators.
  // ["o+", "⊕"],
  // ["o--", "⊖"],
  // ["ox", "⊗"],
  // ["o/", "⊘"],
  // ["o.", "⊙"],
  // ["oo", "⊚"],
  // ["o*", "⊛"],
  // ["o=", "⊜"],
  // ["o-", "⊝"],
  // ["O+", "⨁"],
  // ["Ox", "⨂"],
  // ["O.", "⨀"],
  // ["O*", "⍟"],

  // Boxed operators.
  // ["b+", "⊞"],
  // ["b-", "⊟"],
  // ["bx", "⊠"],
  // ["b.", "⊡"],

  // Various symbols.
  // ["integral", "∫∬∭∮∯∰∱∲∳"],
  // ["angle", "∟∡∢⊾⊿"],
  // ["join", "⋈⋉⋊⋋⋌⨝⟕⟖⟗"],

  // Arrows.
  // ["l", "←⇐⇚⇇⇆↤⇦↞↼↽⇠⇺↜⇽⟵⟸↚⇍⇷ ↹     ↢↩↫⇋⇜⇤⟻⟽⤆↶↺⟲ "],
  // ["r", "→⇒⇛⇉⇄↦⇨↠⇀⇁⇢⇻↝⇾⟶⟹↛⇏⇸⇶ ↴    ↣↪↬⇌⇝⇥⟼⟾⤇↷↻⟳⇰⇴⟴⟿ ➵➸➙➔➛➜➝➞➟➠➡➢➣➤➧➨➩➪➫➬➭➮➯➱➲➳➺➻➼➽➾⊸"],
  // ["u", "↑⇑⟰⇈⇅↥⇧↟↿↾⇡⇞          ↰↱➦ ⇪⇫⇬⇭⇮⇯                                           "],
  // ["d", "↓⇓⟱⇊⇵↧⇩↡⇃⇂⇣⇟         ↵↲↳➥ ↯                                                "],
  // ["ud", "↕⇕   ↨⇳                                                                    "],
  // ["lr", "↔⇔         ⇼↭⇿⟷⟺↮⇎⇹                                                        "],
  // ["ul", "↖⇖                        ⇱↸                                               "],
  // ["ur", "↗⇗                                         ➶➹➚                             "],
  // ["dr", "↘⇘                        ⇲                ➴➷➘                             "],
  // ["dl", "↙⇙                                                                         "],
  ["l-", "←"],
  ["<-", "←"],
  ["l=", "⇐"],
  ["r-", "→"],
  ["->", "→"],
  ["r=", "⇒"],
  ["=>", "⇒"],
  // ["u-", "↑"], ["u=", "⇑"],
  // ["d-", "↓"], ["d=", "⇓"],
  // ["ud-", "↕"], ["ud=", "⇕"],
  ["lr-", "↔"],
  ["<->", "↔"],
  // ["lr=", "⇔"],
  ["<=>", "⇔"],
  // ["ul-", "↖"], ["ul=", "⇖"],
  // ["ur-", "↗"], ["ur=", "⇗"],
  // ["dr-", "↘"], ["dr=", "⇘"],
  // ["dl-", "↙"], ["dl=", "⇙"],

  // ["l==", "⇚"],
  // ["l-2", "⇇"],
  ["l-r-", "⇆"],
  // ["r==", "⇛"],
  // ["r-2", "⇉"],
  // ["r-3", "⇶"],
  // ["r-l-", "⇄"],
  // ["u==", "⟰"],
  // ["u-2", "⇈"],
  // ["u-d-", "⇅"],
  // ["d==", "⟱"],
  // ["d-2", "⇊"],
  // ["d-u-", "⇵"],

  // ["l--", "⟵"],
  // ["<--", "⟵"],
  // ["l~", "↜⇜"],
  // ["r--", "⟶"],
  // ["-->", "⟶"],
  // ["r~", "↝⇝⟿"],
  // ["lr--", "⟷"],
  // ["<-->", "⟷"],
  // ["lr~", "↭"],

  // ["l-n", "↚"],
  // ["<-n", "↚"],
  // ["l=n", "⇍"],
  // ["r-n", "↛"],
  // ["->n", "↛"],
  // ["r=n", "⇏"],
  // ["=>n", "⇏"],
  // ["lr-n", "↮"],
  // ["<->n", "↮"],
  // ["lr=n", "⇎"],
  // ["<=>n", "⇎"],

  // ["l-|", "↤"],
  // ["ll-", "↞"],
  ["r-|", "↦"],
  ["mapsto", "↦"],
  // ["rr-", "↠"],
  // ["u-|", "↥"],
  // ["uu-", "↟"],
  // ["d-|", "↧"],
  // ["dd-", "↡"],
  // ["ud-|", "↨"],

  // ["l->", "↢"],
  // ["r->", "↣"],

  // ["r-o", "⊸"],
  // ["-o", "⊸"],

  // ["dz", "↯"],

  // Ellipsis.
  ["...", "⋯⋮⋰⋱"],

  // Blackboard bold letters.
  ["bC", "ℂ"],
  ["bH", "ℍ"],
  ["bN", "ℕ"],
  ["bP", "ℙ"],
  ["bQ", "ℚ"],
  ["bR", "ℝ"],
  ["bZ", "ℤ"],

  // Parentheses.
  //["(", "([{⁅⁽₍〈⎴⟅⟦⟨⟪⦃〈《「『【〔〖〚︵︷︹︻︽︿﹁﹃﹙﹛﹝（［｛｢"],
  //[")", ")]}⁆⁾₎〉⎵⟆⟧⟩⟫⦄〉》」』】〕〗〛︶︸︺︼︾﹀﹂﹄﹚﹜﹞）］｝｣"],
  ["[[", "⟦"],
  ["]]", "⟧"],
  ["<", "⟨"],
  [">", "⟩"],
  ["<<", "⟪"],
  [">>", "⟫"],
  ["{{", "⦃"],
  ["}}", "⦄"],

  // ["(b", "⟅"],
  // [")b", "⟆"],
  // ["lbag", "⟅"],
  // ["rbag", "⟆"],
  // ["(|", "⦇"], // Idiom brackets
  // ["|)", "⦈"],
  // ["((", "⦅"], // Banana brackets
  // ["))", "⦆"],

  // Primes.
  ["'", "′″‴⁗"],
  ["'1", "′"],
  ["`", "‵‶‷"],

  // Fractions.
  // ["frac", "¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟"],

  // Bullets.
  // ["bu", "•◦‣⁌⁍"],
  // ["bub", "•"],
  // ["buw", "◦"],
  // ["but", "‣"],

  // Musical symbols.
  // ["note", "♩♪♫♬"],
  ["b", "♭"],
  ["#", "♯"],

  // Other punctuation and symbols.
  ["\\", "\\"],
  // ["en", "–"],
  // ["em", "—"],
  // ["!!", "‼"],
  // ["??", "⁇"],
  // ["?!", "‽⁈"],
  // ["!?", "⁉"],

  // Shorter forms of many greek letters plus ƛ.
  ["Ga", "α"], ["GA", "Α"],
  ["Gb", "β"], ["GB", "Β"],
  ["Gg", "γ"], ["GG", "Γ"],
  ["Gd", "δ"], ["GD", "Δ"],
  ["Ge", "ε"], ["GE", "Ε"],
  ["Gz", "ζ"], ["GZ", "Ζ"],
  ["eta", "η"],
  ["Gth", "θ"], ["GTH", "Θ"],
  ["Gi", "ι"], ["GI", "Ι"],
  ["Gk", "κ"], ["GK", "Κ"],
  ["Gl", "λ"], ["GL", "Λ"], ["Gl-", "ƛ"],
  ["Gm", "μ"], ["GM", "Μ"],
  ["Gn", "ν"], ["GN", "Ν"],
  ["pi", "π"], ["Pi", "Π"],
  ["varphi", "φ"], ["Phi", "Φ"],
  ["phi", "ϕ"], ["Varphi", "Φ"],
  ["Gx", "ξ"], ["GX", "Ξ"],
  ["Gr", "ρ"], ["GR", "Ρ"],
  ["Gs", "σ"], ["GS", "Σ"],
  ["Gt", "τ"], ["GT", "Τ"],
  ["Gu", "υ"], ["GU", "Υ"],
  ["Gf", "φ"], ["GF", "Φ"],
  ["Gc", "χ"], ["GC", "Χ"],
  ["Gp", "ψ"], ["GP", "Ψ"],
  ["Go", "ω"], ["GO", "Ω"],

  // (Sub / Super) scripts
  ["_0", "₀"], ["_1", "₁"], ["_2", "₂"], ["_3", "₃"], ["_4", "₄"],
  ["_5", "₅"], ["_6", "₆"], ["_7", "₇"], ["_8", "₈"], ["_9", "₉"],

  ["_a", "ₐ"], ["_e", "ₑ"], ["_h", "ₕ"], ["_i", "ᵢ"], ["_j", "ⱼ"],
  ["_k", "ₖ"], ["_l", "ₗ"], ["_m", "ₘ"], ["_n", "ₙ"], ["_o", "ₒ"],
  ["_p", "ₚ"], ["_r", "ᵣ"], ["_s", "ₛ"], ["_t", "ₜ"], ["_u", "ᵤ"],
  ["_x", "ₓ"],

  ["^0", "⁰"], ["^1", "¹"], ["^2", "²"], ["^3", "³"], ["^4", "⁴"],
  ["^5", "⁵"], ["^6", "⁶"], ["^7", "⁷"], ["^8", "⁸"], ["^9", "⁹"],

  ["^a", "ᵃ"], ["^b", "ᵇ"], ["^c", "ᶜ"], ["^d", "ᵈ"], ["^e", "ᵉ"],
  ["^f", "ᶠ"], ["^g", "ᵍ"], ["^h", "ʰ"], ["^i", "ⁱ"], ["^j", "ʲ"],
  ["^k", "ᵏ"], ["^l", "ˡ"], ["^m", "ᵐ"], ["^n", "ⁿ"], ["^o", "ᵒ"],
  ["^p", "ᵖ"], ["^r", "ʳ"], ["^s", "ˢ"], ["^t", "ᵗ"], ["^u", "ᵘ"],
  ["^v", "ᵛ"], ["^w", "ʷ"], ["^x", "ˣ"], ["^y", "ʸ"], ["^z", "ᶻ"],

  ["^A", "ᴬ"], ["^B", "ᴮ"], ["^D", "ᴰ"], ["^E", "ᴱ"], ["^G", "ᴳ"],
  ["^H", "ᴴ"], ["^I", "ᴵ"], ["^J", "ᴶ"], ["^K", "ᴷ"], ["^L", "ᴸ"],
  ["^M", "ᴹ"], ["^N", "ᴺ"], ["^O", "ᴼ"], ["^P", "ᴾ"], ["^R", "ᴿ"],
  ["^T", "ᵀ"], ["^U", "ᵁ"], ["^V", "ⱽ"], ["^W", "ᵂ"],
]);
