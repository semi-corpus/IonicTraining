<form (ngSubmit)="addVetement(); form.reset()" #form="ngForm">

 <!--L'évènement ngSubmit est natif angular et se déclenche au click sur le bouton

 a la touche entrée du clavier, etc. Il aurait pu être remplacer par un (click) sur le bouton.

 on va créer une variable de formulaire pour pouvoir y faire référence dans sa globalité-->

   <div>

     <label for="create[type]">Type : </label>

      <input id="create[type]" name="type" [(ngModel)]="newVet.type"

      #inputType="ngModel" required pattern="[_0-9a-zA-Z -]*">

     <!--le * du required pattern indique qu'on ne limite pas le nombre de caractère lors de la saisie-->

   <p [hidden]="inputType.valid || inputType.untouched">Vous ne pouvez utiliser que des lettres, chiffres, underscore, tirets et espaces</p>

   <!--on recupère la variable du champ input et on lui rajoute la valeur true à la propriété hidden si la valeur est valide et untouched

   Attention : valid et untouched sont des classes qui sont générées automatiquement dans le formulaire-->

    </div>

    <div>

      <label for="create[marque]">Marque : </label>

      <input id="create[marque]" name="marque" [(ngModel)]="newVet.marque"

      #inputMarque="ngModel" required pattern="[_0-9a-zA-Z -]*">

      <p [hidden]="inputMarque.valid || inputMarque.untouched">Vous ne pouvez utiliser que des lettres, chiffres, underscore, tirets et espaces</p>

    </div>

    <div>

      <label for="create[lieuFabrication]">Lieu de Fabrication : </label>

      <input id="create[lieuFabrication]" name="lieuFabrication" [(ngModel)]="newVet.lieuFabrication"

      #inputlieuFabrication="ngModel" required pattern="[a-zA-Zéèêôù -]{0,36}">

      <p [hidden]="inputlieuFabrication.valid || inputlieuFabrication.untouched">Vous ne pouvez utiliser que des lettres, tirets et espaces</p>

       <!-- Le double binding pourrait presque etre simplement remplacer par un event binding

     puisqu'il s'agit ici de seulement envoyer une info dans newVet-->

    </div>

    <div>

      <label  for="create[materiauPrincipal]">Materiau Principal : </label>

      <input type="text" id="create[materiauPrincipal]" name="materiauPrincipal" [(ngModel)]="newVet.materiauPrincipal"

      #inputmateriauPrincipal="ngModel" required pattern="[a-zA-Zéèêôù -]+">

      <p [hidden]="inputmateriauPrincipal.valid || inputmateriauPrincipal.untouched">Vous ne pouvez utiliser que des lettres, tirets et espaces</p>

      <!--le type="text" n'est pas nécessaire puisque text est le type par défaut de input

     le + sur les pattern signifie "au moins 1"-->

    </div>

    <div>

      <label for="create[prix]">Prix : </label>

      <select id="create[prix]" name="prix" [(ngModel)]="newVet.prix" required>

        <option>{{range.lt50e}}</option>

        <!--la value de la balise option, si non définie sera par défaut celle du texte écrit dans l'option-->

        <option value="50-100€">50-100€</option>

        <option value="100-200€">100-200€</option>

        <option value="200-500€">200-500€</option>

        <option value=">500€">>500€</option>

       </select>

    </div>

    <button [disabled]="form.invalid">Add to List</button>

    <!--ici on récupère l'attribut form de la variable formulaire créée plus haut a qui on rajoute la propriété invalid

 invalid est une propriété de ngForm (natif angular apporté par formsModule)-->

  {{newVet | json }}

  </form>