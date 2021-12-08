// Syrup auto-generated file
import Foundation

public extension StarWarsAPI {
struct PeopleFilmsResponse: GraphApiResponse, Equatable {
	// MARK: - Response Fields
		public var person: Person?

	// MARK: - Helpers
	public let __typename: String

	public static let customDecoder: JSONDecoder = StarWarsAPI.customDecoder
	public static let customEncoder: JSONEncoder = StarWarsAPI.customEncoder

	public init(person: Person?) {
			self.person = person
			self.__typename = "Root"
	}

		// MARK: - Nested Types
			public struct Person: GraphApiResponse, Equatable {
		// MARK: - Response Fields
			/// The ID of an object
			public var id: GraphID
			/// The name of this person.
			public var name: String?
			public var filmConnection: FilmConnection?
		// MARK: - Helpers
		public let __typename: String
		public static let customDecoder: JSONDecoder = StarWarsAPI.customDecoder
		public static let customEncoder: JSONEncoder = StarWarsAPI.customEncoder
		public init(id: GraphID, name: String?, filmConnection: FilmConnection?) {
				self.id = id
				self.name = name
				self.filmConnection = filmConnection
				self.__typename = "Person"
		}
			// MARK: - Nested Types
				public struct FilmConnection: GraphApiResponse, Equatable {
			// MARK: - Response Fields
				/// A list of all of the objects returned in the connection. This is a convenience
				/// field provided for quickly exploring the API; rather than querying for
				/// "{ edges { node } }" when no edge data is needed, this field can be be used
				/// instead. Note that when clients like Relay need to fetch the "cursor" field on
				/// the edge to enable efficient pagination, this shortcut cannot be used, and the
				/// full "{ edges { node } }" version should be used instead.
				public var films: [Films?]?
			// MARK: - Helpers
			public let __typename: String
			public static let customDecoder: JSONDecoder = StarWarsAPI.customDecoder
			public static let customEncoder: JSONEncoder = StarWarsAPI.customEncoder
			public init(films: [Films?]?) {
					self.films = films
					self.__typename = "PersonFilmsConnection"
			}
				// MARK: - Nested Types
					public struct Films: GraphApiResponse, Equatable {
				// MARK: - Response Fields
					/// The ID of an object
					public var id: GraphID
					/// The title of this film.
					public var title: String?
					/// The ISO 8601 date format of film release at original creator country.
					public var releaseDate: String?
					/// The name of the director of this film.
					public var director: String?
				// MARK: - Helpers
				public let __typename: String
				public static let customDecoder: JSONDecoder = StarWarsAPI.customDecoder
				public static let customEncoder: JSONEncoder = StarWarsAPI.customEncoder
				public init(id: GraphID, title: String?, releaseDate: String?, director: String?) {
						self.id = id
						self.title = title
						self.releaseDate = releaseDate
						self.director = director
						self.__typename = "Film"
				}
			}
		}
	}
}
}
