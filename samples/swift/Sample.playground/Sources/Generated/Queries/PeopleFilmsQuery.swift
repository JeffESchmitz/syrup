// Syrup auto-generated file
import Foundation

public extension StarWarsAPI {
	struct PeopleFilmsQuery: GraphApiQuery, ResponseAssociable, Equatable {
		// MARK: - Query Variables
			public let id: GraphID?

		// MARK: - Initializer
		public init(id: GraphID? = nil) {
				self.id = id
		}

		// MARK: - Helpers

		public static let customEncoder: JSONEncoder = StarWarsAPI.customEncoder

		private enum CodingKeys: CodingKey {
				case id
		}

		public typealias Response = PeopleFilmsResponse

		public let queryString: String = """
		query PeopleFilms($id: ID) { __typename person(id: $id) { __typename id name filmConnection { __typename films { __typename id title releaseDate director } } } }
		"""
	}
}


extension StarWarsAPI.PeopleFilmsQuery {
  public static let operationSelections: GraphSelections.Operation? = nil
}
