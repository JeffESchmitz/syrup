import UIKit
import PlaygroundSupport

let query = StarWarsAPI.FilmsQuery(first: 10)

let client = GraphQLClient(endpoint: URL(string: "https://swapi-graphql.netlify.com/.netlify/functions/index")!)

//client.query(query, responseType: StarWarsAPI.FilmsResponse.self) { (response, error) in
//	if let response = response {
//		response.allFilms?.edges?.forEach { edge in
//			if let node = edge?.node, let title = node.title, let director = node.director, let openingCrawl = node.openingCrawl {
//				print("Title: \(title) Directed by: \(director)\nA long time ago, in a galaxy far, far away...\n\(openingCrawl)\n")
//			}
//		}
//	}
//}

let peoplFilmsQuery = StarWarsAPI.PeopleFilmsQuery(id: GraphID(stringLiteral: "cGVvcGxlOjI="))  // "cGVvcGxlOjI=" is Luke Skywalker's Person ID.

client.query(peoplFilmsQuery, responseType: StarWarsAPI.PeopleFilmsResponse.self) { response, error in
    if let response = response {
        print("")
        print("Star Wars Films:")
        print("")
        
        response.person?.filmConnection?.films?.forEach({ film in
            if let film = film,
                let title = film.title,
                let releaseDate = film.releaseDate,
                let director = film.director {
                print("id:\t\t\t\(film.id)")
                print("title:\t\t\(title)")
                print("releaseDate: \(releaseDate)")
                print("director:\t\(director)")
            }
            print("")
        })
    }
}

PlaygroundPage.current.needsIndefiniteExecution = true
