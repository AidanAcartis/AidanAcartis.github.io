- taskMonitor(python + bash shell):
Un app développé avec python et PyQT6, qui lance une surveillance des fenêtres ouverts
et fermés sur le machine (wmctrl + X11), ainsi que les commandes lancés, enregistrés dans .bashistory. Un mode processing normalise les logs, utilise un modèle pour fournir une description complète des events des fenêtres et un commande "cmddesc" que j'ai développer pour donner une description aux commandes. Puis, utilise un autre modèle pour regrouper les tâches correspondant à un même intention, grâce aux descriptions. Enfin, un autre modèle donne une définition de l'intention global derrière l'ensemble des tâches pour donner une vision générale des activités de l'utilisateur. 
Ces events sont enregistrés avec l'heure alors , taskMonitor représente dans son interface les activités de l'user par graphe et statistiques.

- Semantic-Task-Clustering(notebook)
Le modèle qui sert à la clusterisation des tasks items dans taskMonitor

- FileDescGen(notebook)
Le modèle qui sert à donner des descriptions des logs brutes(interprétation des logs et génération de description)

- Gauss-Jordan_Solver (en Java)
Voici :
Gauss-Jordan Solver
This project automates the resolution of a linear system of equations using the Gauss-Jordan elimination method.
All calculations are done with exact fractions to avoid rounding errors.

Mathematical Method
A linear system is written as:


P * X = B

Where:

P is the coefficient matrix (m x n)
X is the unknown vector
B is the constant vector
Gauss-Jordan elimination
The algorithm transforms the augmented matrix (P | B) into Reduced Row Echelon Form (RREF).

The goal is to obtain:

pivot = 1
zeros above and below each pivot
Once the matrix is in RREF, the solution is directly read from the last column.

Algorithm (High Level)
For each row and column:
Find the first non-zero element (pivot)
Divide the row by the pivot to make it 1
Eliminate all other values in that column (above and below the pivot)
Check for inconsistency:
If a row becomes [0 0 0 | b] with b != 0 → no solution
Reorder rows so that zero rows are at the bottom
Output the solution vector
Project Structure

Gauss-Jordan_Solver/
├── Fraction.java
├── FractionApp.java
├── Main.java
├── MatrixUtils.java
├── Solver.java
└── README.md

Example Session

Nombre de lignes : 4
Nombre de colonnes : 3
Entrez les coefficients de la matrice P (forme a/b) :
P[0][0] = -1/2
P[0][1] = 1/3
P[0][2] = 0
P[1][0] = 1/2
P[1][1] = -2/3
P[1][2] = 1/2
P[2][0] = 0
P[2][1] = 1/3
P[2][2] = -1/2
P[3][0] = 1
P[3][1] = 1
P[3][2] = 1
Entrez les valeurs du second membre B (forme a/b) :
B[0] = 0
B[1] = 0
B[2] = 0
B[3] = 1
Matrice augmentée (P | B) :
| 1 -2/3 0 | 0 |
| 0 -1/3 1/2 | 0 |
| 0 1/3 -1/2 | 0 |
| 0 5/3 1 | 1 |

Matrice augmentée (P | B) :
| 1 0 -1 | 0 |
| 0 1 -3/2 | 0 |
| 0 0 0 | 0 |
| 0 0 7/2 | 1 |

Matrice augmentée (P | B) :
| 1 0 0 | 2/7 |
| 0 1 0 | 3/7 |
| 0 0 0 | 0 |
| 0 0 1 | 2/7 |

Matrice réordonnée (lignes nulles en bas) :
Matrice augmentée (P | B) :
| 1 0 0 | 2/7 |
| 0 1 0 | 3/7 |
| 0 0 1 | 2/7 |
| 0 0 0 | 0 |

X[0] = 2/7
X[1] = 3/7
X[2] = 2/7

How to run

javac *.java
java Main


- AlgoGenCarreLatin (en C - mon premier code, sans AI et sans Stackoverflow)
Voici : Latin Square Generator and Permutation Explorer (C)
This project generates Latin squares from permutations of an initial row, and explores all possible permutations using optimized loops.

The program is written in C, and is split into several modules:

main.c
boucles.c
permutation.c
utils.c
header files: permutation.h, boucles.h, utils.h
Project Objective
Generate a Latin square of order n from an initial permutation.
Iterate through all possible permutations of the first row.
For each permutation, build the corresponding Latin square.
Display the number of generated permutations.
Mathematical Concepts
1. Factorial (n!)
The number of permutations of a set with n elements is:

[ n! = n \times (n-1) \times (n-2) \times \dots \times 2 \times 1 ]

The function Factoriel(n) computes this value:

int Factoriel(int a)
{
    int F = 1;
    for(int i = 2; i <= a; i++)
        F *= i;
    return F;
}
2. Half Factorial (n!/2)
To optimize the search and reduce the number of iterations, the program uses:

[ \frac{n!}{2} ]

The function FactorielSur2(n) computes n!/2:

int FactorielSur2(int a)
{
    if (a <= 1) return 1;

    int F = 1;
    for(int i = 2; i <= a; i++)
        F *= i;

    return F / 2;
}
3. Latin Square
A Latin square of order n is an n × n matrix such that:

Each row contains numbers from 1 to n without repetition.
Each column contains numbers from 1 to n without repetition.
In this project, the Latin square is built from a base row t:

[ \text{Square}[i][j] = t[(i + j) \bmod n] ]

This creates a cyclic Latin square, which is one of the standard constructions.

4. Permutations by Circular Shifts
The permutation function FonctionPermut() performs a circular shift of the array t.

Given a row:

t = [1, 2, 3, 4]
With tour = 1, permut = 4:

T = [4, 1, 2, 3]
The function ensures the permutation respects bounds and stays within the array.

File Structure
main.c
Reads the dimension n
Creates and initializes the base row t
Creates the Tour and Permut arrays
Prints the expected number of permutations (n!)
Calls BouclePermut()
boucles.c
Contains:

BouclePermut()

Iterates through permutations of the first row
Builds Latin squares
Calls BouclePermutCarre()
BouclePermutCarre()

Iterates through permutations of the Latin square itself
Echange()

Copies one matrix into another
permutation.c
Contains:

FonctionPermut()

Applies a circular permutation on the row
DefinirTableaut()

Defines the initial base row [1..n]
utils.c
Contains:

Display functions (afficheTableau, afficheTableauPermutee)
Factoriel() and FactorielSur2()
Example Execution
Example input:

Enter the dimension: 3
Expected output:

1   2   3
We should obtain 6 permutations
...
Compilation
gcc main.c boucles.c permutation.c utils.c -o main
Run:

./main
Author
A C project for generating Latin squares and exploring permutations.

- Global_Task_Description
Le modèle qui sert à donner les global intention aux clusters dans taskMonitor

- AlgoGenSudoku (en C mon premier code sans AI et sans Stackoverflow)
All Valid Sudoku Generator (C)
Project Description
This project generates all valid Sudoku grids of size n × n, where n is a perfect square (for example: 4, 9, 16).
The program outputs:

Grid0 (cell numbering from 1 to n²)
Placement grids (uplets)
Final Sudoku grids built from these placements
Mathematical Concept
Goal
Build all valid Sudoku grids while respecting the following rules:

For a Sudoku of size n × n (with n = k²):

Each row must contain numbers 1..n exactly once
Each column must contain numbers 1..n exactly once
Each k×k block must contain numbers 1..n exactly once
Main Algorithm (Backtracking + Combinatorics)
This program uses a combinatorial approach:
It generates all possible permutations of placements, then checks each one with Sudoku constraints.

How it works
The core function RemplirUpletComplet() performs:

Permutation generation
The algorithm iterates through all possible placements (combinations) using a counter matrix boucle[][].

Constraint checking
For each placement, the algorithm checks:

row constraints (ConditionLigne())
block constraints (ConditionBloc())
presence of the number (TestPresence())
Backtracking
When no valid position is found for a number, the algorithm goes back to try other placements.

This is an exhaustive search: it explores every possible configuration until all valid Sudoku grids are found.

Core Function: RemplirUpletComplet()
This function is the heart of the program.
It generates all possible permutations and ensures validity using backtracking.

Summary of what it does:
For each row (number to place)
For each column (possible position)
Try to place the number
If the placement is valid → keep it
If not valid → increment the counter and try the next possibility
If no valid placement exists → backtrack to previous cells
Meaning of the algorithm
The matrix boucle[][] acts like a combinatorial counter.
Every iteration represents a new permutation of placements.

File Structure
main.c
Contains the main() function and manages the program flow.

fonction.c
Contains all helper functions:

initialization
display
constraint checks
generation of uplets
backtracking logic
fonction.h
Function declarations.

Example Output (n = 4)

Grid0 (cell numbering):
1  2  3  4
5  6  7  8
9 10 11 12
13 14 15 16

Placement grid (uplet):
1 10  7 16
2 11  8 13
3 12  5 14
4  9  6 15

Final Sudoku constructed:
1  2  3  4
3  4  1  2
4  1  2  3
2  3  4  1

Validation of Generated Sudokus
You can add a function to verify each Sudoku:


x Sudokus are valid
y Sudokus are invalid (list of invalid indices)

Mathematical Concepts Used
Concept	Usage
Perfect square	n = k²
Latin square	Base grid structure
Permutation	Generating all possible placements
Combinatorics	Counting all configurations
Backtracking	Searching and pruning solutions
Constraint checks	Row / Column / Block validity
Compilation & Running

gcc main.c sudoku.c utils.c -o main -lm
./main

Important Note
This program performs exhaustive generation.
For large dimensions (16×16), computation can be very long.

- Diary_app
Diary App avec Cassandra
Description de l'application
Cette application permet à un utilisateur d'écrire, consulter et gérer ses entrées de diary. Elle offre également un dashboard affichant des statistiques détaillées sur l'activité de l'utilisateur, notamment :

Nombre de sessions
Utilisateurs actifs
Durée des sessions
Pages visitées
Actions CRUD sur les diaries
Le backend utilise Cassandra pour stocker les données de manière distribuée et performante.

Architecture & Bases de données
Keyspace
Le keyspace principal est :


diary_app

Tables
Les tables principales sont :

user_accounts : informations sur les utilisateurs (id, email, mot de passe, date création…)
user_profiles : informations complémentaires sur l'utilisateur (nom, prénom, avatar…)
user_diary : les entrées du diary de chaque utilisateur
user_sessions : suivi des sessions utilisateur (durée, pages visitées, actions…)
Exemple de structure de table
Pour user_accounts :

DESCRIBE TABLE user_accounts;
Pour voir les données :

SELECT * FROM user_accounts LIMIT 10;
Prérequis
Java 11 (OpenJDK 11)
Cassandra 5.0.x
Node.js (version recommandée >= 18) et npm/yarn
Accès terminal et privilèges sudo pour démarrer Cassandra
Installation
Installer Cassandra et Java 11

sudo apt update
sudo apt install cassandra openjdk-11-jdk
Démarrer le service Cassandra

sudo systemctl start cassandra
sudo systemctl status cassandra
Se connecter à Cassandra via cqlsh

cqlsh
Utiliser le keyspace diary_app

USE diary_app;
Vérifier les tables

DESCRIBE TABLES;
Lancement de l'application Backend
Se placer dans le répertoire du backend :

cd ~/Documents/lesson/Semestre_pair/Appli_mongo/cassandra/Cass_app/backend
Installer les dépendances Node.js :

npm install
Lancer le serveur :

npm start
Le serveur doit se connecter à Cassandra et exposer les endpoints pour gérer les users, diaries et sessions.

Utilisation de l'application
CRUD Diary
Créer une entrée : POST sur /diary
Lire toutes les entrées : GET sur /diary
Mettre à jour : PUT sur /diary/:id
Supprimer : DELETE sur /diary/:id
Dashboard
Le dashboard récupère les données depuis user_sessions pour calculer :

Nombre de sessions
Durée totale et moyenne des sessions
Pages visitées
Actions CRUD sur les diaries
Commandes utiles Cassandra
Lister les keyspaces :

DESCRIBE KEYSPACES;
Lister les tables dans diary_app :

DESCRIBE TABLES;
Voir la structure d'une table :

DESCRIBE TABLE user_accounts;
Voir les données d'une table :

SELECT * FROM user_accounts LIMIT 10;
Notes
Cassandra doit être en fonctionnement avant de démarrer le backend.
Vérifier les configurations réseau si le backend et Cassandra sont sur des machines différentes.
Les sessions utilisateur sont suivies dans user_sessions pour alimenter les statistiques du dashboard.

- FarmingResources
ModifyFarming
Description
ModifyFarming est un programme C++ qui simule le déplacement de troupes sur un terrain en forme de grille hexagonale, en évitant les obstacles. Il calcule le chemin le plus court depuis la position initiale des troupes jusqu’à un camp de bûcherons, et compare le temps nécessaire pour les troupes amies et ennemies.

Le programme prend en compte :

Les troupes amies et ennemies avec leurs vitesses.
Les cellules impassables.
Les mouvements possibles sur un terrain hexagonal.
La comparaison du temps pour déterminer quelle troupe atteint le camp en premier.
Fichiers
ModifyFarming.cpp : Contient l’implémentation principale de l’algorithme de cheminement et des fonctions pour gérer les mouvements et les obstacles.

OutputForModifyFarming.cpp : Exemple d’exécution avec un jeu de données différent (positions initiales des troupes et obstacles).

Fonctionnalités principales
Calcul du chemin le plus court vers le camp de bûcherons (fonction1, fonction2).
Gestion des mouvements alternatifs en cas d’obstacles (forChange, choice).
Vérification des cases impassables (Verif, Forbid).
Comparaison des temps de trajet entre troupes amies et ennemies (solution).
Affichage des positions et des chemins pour débogage (displayArray, displayMatrice).
Compilation
Pour compiler le programme, utilisez g++ :

g++ -o ModifyFarming ModifyFarming.cpp
g++ -o OutputForModifyFarming OutputForModifyFarming.cpp
Exécution
./ModifyFarming
./OutputForModifyFarming
Le programme affiche True si les troupes amies atteignent le camp avant les ennemis, sinon False.

Exemple de données
Troupes amies : {17,18,6}
Troupes ennemies : {19,16,6}
Camp de bûcherons : {18,19}
Obstacles : {{17,19},{18,18},{19,18}}

- Texte-Feature-Extraction(notebook)

Text Classification with Feature Extraction
This project focuses on text classification using various feature extraction techniques and classical machine learning models.

Overview
We explore three main types of features extracted from text datasets:

Bag-of-Words (BoW) – Using unigrams for word counts.
TF-IDF – Capturing word importance across documents.
N-grams (N ≥ 2) – Including sequences of multiple words.
Each feature type is used to train multiple models, including Softmax (Logistic Regression), Linear SVM, Random Forest, and Gradient Boosting, with hyperparameter tuning to optimize performance.

Project Pipeline
1. Load Dataset
Load the raw text dataset and create training, validation, and test splits.

2. Exploratory Data Analysis (EDA)
Check imbalance across classes.
Check outliers in text lengths or missing data.
Most frequent words using raw Bag-of-Words.
TF-IDF distribution analysis.
t-SNE visualization of classes.
3. Data Preprocessing
Text noise removal
clean_footer
extract_body_text
Build structured dataframe
Remove outliers
Empty or NaN texts
Very short texts
Other outliers
Text preprocessing
Lowercasing, tokenization, stopword removal, lemmatization
4. Feature Extraction and Training
A. Bag-of-Words
Vectorization: CountVectorizer (unigrams)
Training Results
Model	Train	Validation	Test
Softmax	0.807	0.739	0.665
SVM	0.872	0.786	0.698
Random Forest (no hyperparams)	0.746	0.672	0.622
Random Forest (tuned)	0.816	0.733	0.687
Gradient Boosting (untuned)	0.628	0.611	0.558
Gradient Boosting (tuned)	0.794	0.711	0.652
B. TF-IDF
Vectorization: TF-IDF
Training Results
Model	Train	Validation	Test
Softmax	0.839	0.798	0.732
SVM Linear	0.853	0.801	0.741
Random Forest	0.816	0.757	0.706
Gradient Boosting	0.649	0.618	0.574
C. N-grams (N ≥ 2)
Vectorization: CountVectorizer and TF-IDF N-grams
Training Results
Model	Train	Validation	Test
Softmax	0.815	0.755	0.683
SVM Linear	0.837	0.767	0.699
Random Forest	0.564	0.522	0.458
Gradient Boosting	0.634	0.615	0.559
Key Insights
Feature extraction methods significantly impact model performance.
TF-IDF generally outperforms raw Bag-of-Words.
N-grams capture more context but may lead to sparser representations.
Hyperparameter tuning improves Random Forest and Gradient Boosting results.
Repository Link
Full code and notebooks are available at:
https://github.com/AidanAcartis/Text-feature-extraction-classification

- Image-classification-feature-extraction

CIFAR-10 Feature Extraction & Machine Learning Project
This notebook explores image classification on the CIFAR-10 dataset with a focus on feature extraction and machine learning models. The project demonstrates how raw pixel data, HOG features, and deep features from a pre-trained VGG16 model can be used to train classical ML models and improve performance progressively.

Note: At the beginning, models may show poor performance, but they improve gradually as proper data preprocessing and feature extraction are applied.

Summary of the Notebook
1. Load Dataset → Import CIFAR-10 and prepare it for analysis.

2. Exploratory Data Analysis (EDA) A. View Images

Dataset information and pixel statistics
Color channel statistics
Check for exact duplicates
B. Class Distribution → Analyze category balance.

C. Statistical Analysis (Outliers) → Detect extreme values or anomalies.

3. Data Preprocessing

Basic feature extraction (raw pixels)
Normalization / Standardization
Dimensionality reduction (PCA)
4. Random Baseline Evaluation → Evaluate a random baseline model to set reference accuracy.

5. Training Models on Raw Pixels → Split data into training and test sets.

Logistic Regression, SVM (Linear & RBF), k-NN
Hyperparameter tuning using Grid Search and Randomized Search
6. Training Models with HOG Feature Extraction

A. Preprocessing

Convert images to grayscale and extract HOG features
PCA for dimensionality reduction
Standardization
B. Training and Evaluation

Logistic Regression
Linear SVM
Kernel SVM (RBF)
k-NN
HOG captures shapes and textures of images to improve model performance over raw pixels.

7. Training Models with Pre-trained VGG16 Features

A. Preprocessing

Extract deep features from VGG16 (transfer learning)
PCA and standardization
B. Training and Evaluation

Logistic Regression
Linear SVM
Kernel SVM (RBF) → Best performance
k-NN
C. Model Comparison → Compare performance between raw pixels, HOG features, and VGG16 features.

Conclusion

Feature extraction dramatically improves model performance.
Classical ML models benefit from both handcrafted features (HOG) and deep features (VGG16).
Proper preprocessing, feature engineering, and hyperparameter tuning are key to achieving high accuracy.
About
Machine learning on CIFAR-10 combining raw pixels, HOG features, and VGG16 embeddings for progressive feature-based image classification.

Resources
 Readme
 Activity
Stars
 1 star
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
1
@AidanAcartis
AidanAcartis
Languages
Jupyter Notebook
100.0%
Footer

- Command-Describer (python)
Linux Command Describer
A CLI tool to describe command-line inputs.

1- Installation
There are two main ways to install and use the command_describer package: for development or for production/distribution.

Development Installation (Editable Mode)
This method is used while actively developing or testing the package. It allows you to modify the code without reinstalling.

# Activate this part on describe.py:
# ============== install your package in development mode ==============

# def get_data_path(subpath=""):
#     """Return correct path to data folder (works in dev and frozen PyInstaller binary)."""
#     if getattr(sys, "frozen", False):  # PyInstaller bundle
#         base_path = Path(sys._MEIPASS)
#     else:
#         base_path = Path(__file__).resolve().parent.parent / "data"
#     return base_path / subpath

# # Replace JSON_DIR by
# JSON_DIR = get_data_path("dict_json")
# Navigate to the project directory

cd command_describer_project

# Install in editable mode
pip install -e .

# Run the CLI
cmddesc
What happens:

pip install -e . creates a symbolic link in your virtual environment pointing to the source code.
Any changes in the source code are reflected immediately.
Useful for development and testing the CLI locally.
Building and Installing the Package (Production / Distribution)
This method builds distributable files (.whl and .tar.gz) that can be shared or installed on any machine.

# Make sure the build module is installed
python -m pip install --upgrade build

# Build the package (creates dist/ folder)
python -m build

# List the generated distribution files
ls dist/
# -> command_describer-0.1.0-py3-none-any.whl
# -> command_describer-0.1.0.tar.gz

# Install the wheel file on the same or another machine
pip install dist/command_describer-0.1.0-py3-none-any.whl

# Run the CLI
cmddesc
What happens:

python -m build generates a wheel and a source distribution in dist/.
These files can be installed anywhere, without needing the original source folder.
After installation, the CLI works like any other Python package installed via pip.
Summary
Command	Purpose	When to use
pip install -e .	Install for development	Development / local testing
python -m build	Build wheel and source distribution	Production / sharing / publishing
Check the MakeFile

2- Structure:
command_describer/
│
├── command_describer/          ← 📦 Main package
│   ├── __init__.py
│   ├── main.py                 ← CLI entry point (execution)
│   ├── core/
│   │   ├── tokenizer.py        ← Command tokenization
│   │   ├── matcher.py          ← JSON <-> token matching
│   │   ├── describer.py        ← Building the final description
│   │   ├── file_utils.py       ← JSON I/O, paths, logging
│   │   ├── pattern_expander.py ← Placeholder handling and alternatives
│   │   ├── type_detector.py    ← Argument type detection
│   │   └── constants.py        ← Lists (IP_REGEX, FLAGS, CATEGORIES…)
│   │
│   ├── data/
│   │   ├── dict_json/          ← Existing JSON patterns
│   │   └── config.json         ← Global configuration file
│   
│
├── cmddesc_executable          ← PyInstaller executable (optional)
├── dist/                        ← Distribution files
│
├── Makefile                     ← Build / test / install commands
├── pyproject.toml               ← Package configuration
├── requirements.txt             ← Python dependencies
├── README.md

Files and Functions details:
File	Functions / Content
constants.py	HTTP_METHODS, SERVER, GATEWAY, TCPDUMP_OPTIONS, HYDRA_OPTIONS, ARG_TYPE, INTERFACE_CMDS, TYPE_REGEX, TYPE_DESCRIPTION
tokenizer.py	safe_shlex_split, is_quoted, looks_like_option, looks_like_subcommand, split_input_by_commands, split_combined_flags, repair_combined_flags_in_command, describe_script_input, normalize_token, tokenize_input_to_elements
type_detector.py	detect_type
file_utils.py	load_all_jsons, path utilities
pattern_expander.py	extract_placeholders, split_top_level_pipes, expand_alternatives, norm_cmd_token_for_match
matcher.py	describe_input_elements
describer.py	CommandDescriber class, get_data_path, JSON_DIR
main.py	main() with CLI loop, input reading, flags repair, command processing and display
3- Code explanation:
The program is a command-line shell command analyzer and describer. Its main goal is to take a shell command as input, break it into components, detect their types, and provide human-readable descriptions for each part.

Key components and workflow:

Constants & Patterns (constants.py)

Defines command categories, options, HTTP methods, network commands, and regex patterns to detect types like files, folders, IP addresses, ports, URLs, scripts, and more.
Provides a dictionary TYPE_DESCRIPTION for converting detected types into readable labels.
Tokenization (tokenizer.py)

Safely splits user input into tokens, handling quotes and separators (|, &&, ;, ||).
Splits combined flags (e.g., -xvz → -x -v -z) while leaving some commands (like nmap or openssl) intact.
Converts input into structured elements (command + subcommands + arguments).
Type Detection (type_detector.py)

Detects the type of each token based on regex patterns and context (previous token, main command).
Handles files, folders, ports, numbers, URLs, JSON, scripts, Python modules, network targets, and more.
Matching & Description (matcher.py & pattern_expander.py)

Matches the tokenized command against a JSON-based database of known commands and options.
Expands patterns with alternatives (like {{-v|-verbose}}) to allow flexible matching.
Generates either a full description if a complete match is found, or a sequential description token by token otherwise.
File Utilities (file_utils.py)

Loads all JSON files from the dict_json folder into memory as the command reference database.
Main Orchestration (describer.py)

CommandDescriber class acts as the façade: it orchestrates tokenization, type detection, pattern matching, and description generation.
Handles sudo commands and multiple commands separated by operators (&&, |, ;).
Provides an interactive loop via run() to continuously analyze user-entered commands.
Entry Point (main.py)

Creates a CommandDescriber instance and starts the interactive command analysis loop.
In short: The program understands shell commands by breaking them into elements, detecting types, and matching them against a database of known commands to produce clear, readable descriptions for each component. It can handle complex command strings, combined flags, scripts, and even multiple piped commands.

- MongoDB-Library-Management-System
📚 MongoDB Library Management Application
This is a small application designed for experimentation with MongoDB in the context of a library management system.
It was originally created as a coursework project. REALLY NOT RESPONSIVE

The MongoDB database runs on a replica set named rs0.

🏗 Replica Set Setup
HOW TO BUILD THIS REPLICA SET STRUCTURE
The project uses a simple 2-node replica set for MongoDB. To set it up:

Create the data directories for each node:
mkdir -p ../mongo/data/db1 ../mongo/data/db2
Set the environment variables:
MONGO_URI=mongodb://localhost:27017,localhost:27018/libraryDB?replicaSet=rs0
PORT=5000
Remove old lock files and sockets if present:
rm -f ../../mongo/data/db1/mongod.lock
rm -f ../../mongo/data/db2/mongod.lock
sudo rm /tmp/mongodb-27017.sock
Start the replica set nodes:
mongod --port 27017 --dbpath ../../mongo/data/db1 --replSet rs0
mongod --port 27018 --dbpath ../../mongo/data/db2 --replSet rs0
To stop the nodes:
mongod --port 27017 --dbpath ../../mongo/data/db1 --shutdown
mongod --port 27018 --dbpath ../../mongo/data/db2 --shutdown
🚀 Starting the Application
Navigate to the backend folder and install dependencies:
cd backend
npm install
node server.js
Navigate to the frontend folder and install dependencies:
cd frontend
npm install
npm run dev
🧑‍💻 Creating and Configuring a Super-Admin
HOW TO ADD AND CONFIGURE THE SUPER-ADMIN IN THE DATABASE
To experiment with admin functionalities, you must first create a super-admin directly in the database:

Connect to the MongoDB replica set:
mongo --port 27017
Initialize the replica set (if not done already):
rs.initiate()
Switch to the libraryDB:
use libraryDB
Insert the super-admin user:
db.users.insertOne({
  name: "admin-root",
  firstname: "super-admin",
  email: "root@library.com",
  password: "<bcrypt-hashed-password>",
  role: "super-admin",
  isActive: true
});
Verify the user exists:
db.users.find();
Only regular users can sign up through the frontend; the super-admin must be added manually.
🔐 Admin Login
Admin login is possible via the frontend login page.
Only super-admins or admin accounts created in the database can log in.
📂 Database Collections
WHAT TABLES EXIST
rs0 [direct: primary] libraryDB> show collections;
books – contains the list of books
loans – contains borrowed books
notifications – user notifications
notifs – admin notifications
users – information about users
👥 User Functionalities
Sign up
Log in
Borrow a book
View list of books
View book details
Reserve a book
🛠 Admin Functionalities
Log in
Add a new book
View books
Delete a book
Update a book
View book details
Approve or reject a user's loan request
Confirm that a user returned a book
Notify a user to return a borrowed book
View statistics on books, loans, and users
🏗 Project Structure
Root Structure
book-store/
├─ backend/
├─ frontend/
├─ file.txt
└─ README.md
Backend
backend/
├─ app.js
├─ server.js
├─ hash.js
├─ package.json
├─ package-lock.json
├─ start_mongo_replicat.sh
├─ stop_mongo_replicat.sh
├─ config/
├─ controllers/
│  ├─ authController.js
│  ├─ bookController.js
│  ├─ loanController.js
│  ├─ notifController.js
│  ├─ notificationController.js
│  └─ userController.js
├─ middlewares/
├─ models/
├─ routes/
│  ├─ authRoutes.js
│  ├─ bookRoutes.js
│  ├─ loanRoutes.js
│  ├─ notificationRoutes.js
│  ├─ notifRoutes.js
│  └─ userRoutes.js
├─ utils/
└─ public/
Frontend
frontend/
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ eslint.config.js
├─ node_modules/
├─ public/
└─ src/
   ├─ App.jsx
   ├─ App.css
   ├─ index.css
   ├─ main.jsx
   ├─ assets/
   ├─ components/
   │  ├─ BookDetail.jsx
   │  ├─ BookForm.jsx
   │  ├─ Header.jsx
   │  ├─ Rapports/
   │  │  ├─ Analyse.jsx
   │  │  ├─ BooksStats.jsx
   │  │  ├─ Category.jsx
   │  │  ├─ GraphLoan.jsx
   │  │  ├─ Histogramme.jsx
   │  │  ├─ LoansStats.jsx
   │  │  ├─ NavBar.jsx
   │  │  ├─ StatsCard.jsx
   │  │  └─ Top5.jsx
   │  └─ SearchBar.jsx
   ├─ pages/
   │  ├─ admin/
   │  │  ├─ BookManage.jsx
   │  │  ├─ BookUpdateAdmin.jsx
   │  │  ├─ HeaderAdmin.jsx
   │  │  ├─ Loans.jsx
   │  │  ├─ Notifs/
   │  │  ├─ Pages/
   │  │  └─ Users.jsx
   │  ├─ auth/
   │  │  ├─ Login.jsx
   │  │  └─ Signup.jsx
   │  └─ users/
   │     ├─ BookList.jsx
   │     ├─ HomePage.jsx
   │     ├─ LoanPage.jsx
   │     └─ Reservations.jsx
   └─ utils/
      ├─ api/
      │  ├─ books.js
      │  ├─ loans.js
      │  ├─ notification.js
      │  ├─ notifs.js
      │  ├─ reservations.js
      │  └─ users.js
      ├─ baseURL.js
      └─ getImgUrl.js
📊 Dashboards & Visualizations
BooksStats.jsx: book distribution by category, availability, top authors, monthly additions.
UsersStats.jsx: monthly registrations, active vs inactive users.
LoansStats.jsx: loans and late returns per day/week/month/year.
Modern charts: LineChart, BarChart, PieChart with labels, legends, and percentages.
Each chart includes an interpretation in English with emoji.
Users can switch between different timeframes to update charts dynamically.
🔄 Data Flow
Users interact with the React frontend.

Requests go to the Express backend (REST API).

Images are stored in backend/public/uploads.

Books, users, and loans are stored in MongoDB (replication enabled):

Writes on primary.
Reads optimized from secondaries.
Dashboards show dynamic statistics, updating automatically based on selected timeframes (per day / week / month / year).

- Firework (javascript)
un petit feu d'artifice en javascript

- test.mobile
🛍️ Application de Gestion de Produits (React Native + json-server)
🚀 Instructions d'installation et de lancement
Assurez-vous d'avoir installé toutes les dépendances avec npm install.

Ensuite, lancez les serveurs :

# Lance le backend local avec json-server
npx json-server --watch data/db.json --port 3000

# Lance l'application mobile avec Expo
npx expo start
⚠️ Important : Si vous utilisez Expo Go sur un smartphone réel, remplacez localhost dans vos appels réseau (ex. http://localhost:3000/...) par votre adresse IP locale (ex. http://192.168.xx.xx:3000).

🧪 Comment tester l'application
Inscription & Connexion :

À l’ouverture de l’appli, vous tombez sur la page Sign Up.
Si vous êtes déjà inscrit, vous pouvez naviguer vers Sign In.
Une fois connecté, vous accédez à la page Home.
Profil Utilisateur :

Il faut se connecter pour accéder à son profil utilisateur.

Dans la page Profile, vous pouvez :

Modifier votre nom et photo.
Voir le nombre de produits que vous avez créés.
Gestion des Produits (CRUD) :

Accédez à la liste des produits paginée.

Cliquez sur un produit pour voir ses détails.

Sélectionnez un ou plusieurs produits pour voir apparaître les boutons :

Edit : Modifier
Delete : Supprimer
Share : (non fonctionnel)
Cliquez sur Add pour ajouter un nouveau produit avec :

Formulaire
Upload d’image
Filtres & Recherche :

Catégories : Affichez tous les boutons de catégorie disponibles.
Vendeurs : Entrez le nom d’un vendeur pour filtrer les produits.
Prix : Entrez un prix maximum pour n’afficher que les produits moins chers.
Search : Recherche textuelle par nom de produit.
🧱 Architecture et Choix Techniques
React Native avec Expo pour une expérience multiplateforme simple.
json-server simule une API REST locale (/users, /products, /categories).
AsyncStorage pour garder en mémoire l'identifiant de l'utilisateur connecté.
Axios pour les appels réseau.
Gestion d’images avec expo-image-picker.
Navigation via expo-router et gestion des onglets (tabs).
Style personnalisé avec StyleSheet et Ionicons.
✅ Fonctionnalités Implémentées
Authentification : Sign Up / Sign In
CRUD complet des produits
Upload et prévisualisation d’image
Filtres avancés (catégories, vendeurs, prix)
Recherche de produits
Statistiques personnelles (produits créés)
Modification du profil utilisateur
Responsive UI avec navigation fluide
Déconnexion avec suppression du compte
📱 Aperçu
Interface intuitive avec onglets
Composants interactifs : boutons, formulaires, image picker
Système de pagination fluide
Interaction dynamique avec le backend (sans Express)

- Cool_boot

Live Wallpaper Setup on Ubuntu 24.04 LTS
This project sets up an animated live wallpaper on Ubuntu 24.04 LTS using xwinwrap and mpv, automatically launching at startup.

Requirements
First, install the necessary dependencies:

sudo apt-get install xorg-dev build-essential libx11-dev x11proto-xext-dev libxrender-dev libxext-dev
Then, install xwinwrap:

git clone https://github.com/mmhobi7/xwinwrap.git
cd xwinwrap
make
sudo make install
make clean
xwinwrap is a tool that allows you to stick a video player window to your desktop background.

You also need mpv to play videos:

sudo apt install mpv
Script to Launch Live Wallpaper
Create a script, e.g., the_script.sh, with the following content:

#!/bin/bash

export DISPLAY=:0

# Kill xwinwrap if already running
if pgrep xwinwrap > /dev/null; then
  killall xwinwrap
fi

# Change to the script's directory
cd /home/aidan/Documents/wallpap/Live_wallpaps

# Launch animated wallpaper
xwinwrap -g 1920x1080+0+0 -ni -s -st -sp -b -nf -- \
mpv --loop=inf --no-audio --vo=gpu --profile=low-latency \
--no-border --force-window=yes --geometry=1920x1080 \
--no-osc --no-input-default-bindings --no-config MPV/anata.mp4
✅ Make sure the script is executable:

chmod +x /home/aidan/Documents/wallpap/Live_wallpaps/the_script.sh
Auto-Start at Login
Create a .desktop file inside ~/.config/autostart/.

Example: live_wallpaper.desktop

[Desktop Entry]
Type=Application
Exec=bash -c "until xwininfo -root >/dev/null 2>&1; do sleep 1; done; sleep 2; /home/aidan/Documents/wallpap/Live_wallpaps/the_script.sh"
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
Name=Live Wallpaper
Comment=Fond animé selon le jour
This makes sure the script starts only after the desktop environment is fully ready.

Stopping the Live Wallpaper
If you want to stop the wallpaper manually, run:

killall xwinwrap
This will terminate the xwinwrap process and stop the video.

Playing a Sound After Boot
If you want to play a sound file like Luffylaugh.wav after login:

Add this to your startup script after launching the wallpaper:

aplay /home/aidan/Documents/wallpap/Live_wallpaps/Luffylaugh.wav
Or add a second .desktop file for it:

[Desktop Entry]
Type=Application
Exec=aplay /home/aidan/Documents/wallpap/Live_wallpaps/Luffylaugh.wav
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
Name=Play Sound
Comment=Play Luffy Laugh Sound at startup
Notes
Ensure your video (anata.mp4) exists exactly at /home/aidan/Documents/wallpap/Live_wallpaps/MPV/anata.mp4.
If you move your project, update the paths in both the script and .desktop file.
If you use multiple monitors, you may need to adjust the geometry (e.g., 3840x1080).
Enjoy your animated desktop! 🌟

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 1 star
Watchers
 1 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
1
@AidanAcartis
AidanAcartis
Languages
Shell
100.0%
Footer

- BDD-SQL-Plotly
Projet Flask + SQL + Plotly Simulation
Table des matières
Présentation
Lancement du projet
Utilisation de l'application
Simulation automatique
Présentation
Dans ce petit projet, j'ai utilisé Flask pour connecter l'application web à la base de données (app.py).
Pour le côté web, j'ai utilisé HTML, CSS et JavaScript.

Lancement du projet
Depuis votre terminal :

Activez l'environnement virtuel :

source ../../../Projects/myenv/bin/activate
Lancez le serveur Flask :

python3 app.py
Lancer 'index.html' avec go live dans vscode

Pour faire la simulation avec les items dans 'plots_sql.json', lancer ceci :

python3 simulation.py
Utilisation de l'application
Entrer une requête SQL : sélectionnez ce que vous voulez extraire de la base de données.
Taper la requête SQL dans le petit terminal prévu à cet effet.
Cliquer sur le bouton "Send the query".
Si la commande est correcte, une alerte apparaît :
"Données reçues avec succès ! Tu peux tracer ton graphe."
Cliquez sur OK pour continuer.
Pour vérifier les résultats, cliquez sur "Show / Hide the results" pour les afficher ou les cacher.
Entrer le code Plotly dans la zone prévue (plotlyCode) et compléter les informations de mise en page (plotlyLayout) : titre de la figure, nom des axes X et Y, etc.
Cliquez sur "Draw the graph" pour tracer le graphique.
Vous pouvez ensuite voir les propriétés du point cliqué.
Simulation automatique
Le fichier simulation.py permet de simuler automatiquement ce processus avec les 10 items contenus dans plots_sql.json.

Après chaque item, une question s'affiche dans le terminal :

'Would you like to continue the simulation for item {item_index + 1}? (y/n):'

Répondez y pour continuer.
Répondez n pour arrêter la simulation et fermer la page.

- A social media web app