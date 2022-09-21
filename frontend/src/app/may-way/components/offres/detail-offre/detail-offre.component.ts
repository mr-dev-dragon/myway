import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.scss'],
})
export class DetailOffreComponent implements OnInit {
  N_Etude: any[]
  secteur: any[]
  salutation: any[]
  value8: any

  //détails
  details: any = {
    Titre: 'Développeur',
    Poste: 'Développeur full-stack',
    TypeContrat: 'CDI',
    NomEntreprise: 'Smart Automation technologies',
    TypeEntreprise: 'StartUp',
    Image: '',
    Ville: 'Tanger',
    Region: 'Tanger-Tetouan-ElHoceima',
    Secteur: 'Informatique',
    Date_pub: '2022-02-02',
    Date_pos: '2022-02-02',
    Competences: 'HTML',
    NiveauxEt: 'Bac+5',
    NiveauxEx: '2 à 5 ans',
    Langues: 'Espagnol',
    Salaire: '4000 Dh',
    NombresPoste: '5',
    Description: [
      {
        Titre: '',
        Texte:
          'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
        List: [],
      },
    ],
    Missions: [
      {
        Titre: '',
        Texte: 'Au sein du pôle Technique, vous aurez pour mission :',
        List: [
          'Réaliser les développements Back et Front (.net framework & .net core) pour des applications internes.',
          'Participer aux chantiers de rénovation et migration vers des technos de pointe',
          'Assurer la maintenance évolutive et curative des applications existantes.',
        ],
      },
    ],
    ProfilRecherche: [
      {
        Titre: 'Profil recherché :',
        Texte: '',
        List: [
          'Niveau bac + 3/4',
          'Diplôme des sciences de l’information',
          '5 ans d’expérience',
        ],
      },
    ],
    Criteres: [
      {
        Titre: 'Poste proposé :',
        Texte: 'Au sein du pôle Technique, vous aurez pour mission :',
        List: [
          'Réaliser les développements Back et Front (.net framework & .net core) pour des applications internes.',
          'Participer aux chantiers de rénovation et migration vers des technos de pointe',
          'Assurer la maintenance évolutive et curative des applications existantes.',
        ],
      },
      {
        Titre: 'Profil recherché :',
        Texte: '',
        List: [
          'Niveau bac + 3/4',
          'Diplôme des sciences de l’information',
          '5 ans d’expérience',
        ],
      },
    ],
  }
  Det_Ent: any = {
    NomEntreprise: 'Smart Automation Technologies',
    Secteur: 'Informatique',
    SiteInternet: 'www.SatTanger.ma',
    Description:
      "Une société de développement informatique spécialisée dans la création de sites web, de logiciels, et qui intervient également chez vous dans le cadre d'études de projets et d'audit. une société de développement informatique spécialisée dans la création de sites web, de logiciels, et qui intervient également chez vous dans le cadre d'études de projets et d'audit.",
  }

  public postulezForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.postulezForm = this.fb.group({
      salutation: new FormControl('', [Validators.required]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),

      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z \u0600-\u06FF]+$'),
      ]),
      dateNaissance: new FormControl('', [Validators.required]),

      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      metier: new FormControl('', [Validators.required]),

      niveauEtu: new FormControl('', [Validators.required]),

      niveauExp: new FormControl('', [Validators.required]),

      note: new FormControl('', [Validators.required]),

      salaire: new FormControl('', [Validators.required]),

      securite: new FormControl('', [Validators.required]),
    })
    this.N_Etude = [
      { name: 'Qualification avant bac' },
      { name: 'Bac' },
      { name: 'Bac+1' },
      { name: 'Bac+2' },
      { name: 'Bac+3' },
      { name: 'Bac+4' },
      { name: 'Bac+5' },
    ]
    this.secteur = [
      { name: 'Agriculture' },
      { name: 'Électronique' },
      { name: 'Informatique' },
      { name: 'Santé' },
      { name: 'Textile' },
    ]
    this.salutation = [{ name: 'Mme' }, { name: 'Mlle' }, { name: 'Mr' }]
  }

  ngOnInit(): void {}

  sendPostule() {
    if (this.postulezForm.valid) {
      console.log('this.postulezForm', this.postulezForm)
    } else {
      this.postulezForm.markAllAsTouched()
    }
  }
}
