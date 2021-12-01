<?php
  // Se connecter à la base de données
  include("db_connect.php");
  $request_method = $_SERVER["REQUEST_METHOD"];
  switch($request_method)
  {
    case 'GET':
      if(!empty($_GET["id"]))
      {
        // Récupérer un seul produit
        $id = intval($_GET["id"]);
        getProducts($id);
      }
      else
      {
        // Récupérer tous les produits
        getProducts();
      }
      break;
    default:
      // Requête invalide
      header("HTTP/1.0 405 Method Not Allowed");
      break;
    case 'POST':
        // Ajouter un produit
        AddProduct();
      break;
    case 'PUT':
          // Modifier un produit
          $id = intval($_GET["id"]);
          updateProduct($id);
      break;
    case 'DELETE':
        // Supprimer un produit
        $id = intval($_GET["id"]);
        deleteProduct($id);
        break;
  }
?>


<?php
function getProducts($id=0)
  {
    global $conn;
    $query = "SELECT * FROM produit";
    if($id != 0)
    {
      $query .= " WHERE id=".$id." LIMIT 1";
    }
    $response = array();
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_array($result))
    {
      $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
  }
?>




<?php
  function AddProduct()
  {
    global $conn;
    $name = $_POST["name"];
    $description = $_POST["description"];
    $price = $_POST["price"];
    $category = $_POST["category"];
    $created = date('Y-m-d H:i:s');
    $modified = date('Y-m-d H:i:s');

    echo $query="INSERT INTO produit(name, description, price, category_id, created, modified) VALUES('".$name."', '".$description."', '".$price."', '".$category."', '".$created."', '".$modified."')";

    if(mysqli_query($conn, $query))
    {
      $response=array(
        'status' => 1,
        'status_message' =>'Produit ajoute avec succes.'
      );
    }
    else
    {
      $response=array(
        'status' => 0,
        'status_message' =>'ERREUR!.'. mysqli_error($conn)
      );
    }
    header('Content-Type: application/json');
    echo json_encode($response);
  }
?>


<?php
  function updateProduct($id)
  {
    global $conn;
    $_PUT = array(); //tableau qui va contenir les données reçues
    parse_str(file_get_contents('php://input'), $_PUT);
    $name = $_PUT["name"];
    $description = $_PUT["description"];
    $price = $_PUT["price"];
    $category = $_PUT["category"];
    $modified = date('Y-m-d H:i:s');

    //construire la requête SQL
    $query="UPDATE produit SET name='".$name."', description='".$description."', price='".$price."', category_id='".$category."', modified='".$modified."' WHERE id=".$id;
    
    if(mysqli_query($conn, $query))
    {
      $response=array(
        'status' => 1,
        'status_message' =>'Produit mis a jour avec succes.'
      );
    }
    else
    {
      $response=array(
        'status' => 0,
        'status_message' =>'Echec de la mise a jour de produit. '. mysqli_error($conn)
      );
      
    }
    
    header('Content-Type: application/json');
    echo json_encode($response);
  }
?>





<?php
  function deleteProduct($id)
  {
    global $conn;
    $query = "DELETE FROM produit WHERE id=".$id;
    if(mysqli_query($conn, $query))
    {
      $response=array(
        'status' => 1,
        'status_message' =>'Produit supprime avec succes.'
      );
    }
    else
    {
      $response=array(
        'status' => 0,
        'status_message' =>'La suppression du produit a echoue. '. mysqli_error($conn)
      );
    }
    header('Content-Type: application/json');
    echo json_encode($response);
  }
?>