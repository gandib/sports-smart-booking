import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => ({
        url: `/facility`,
        method: "GET",
      }),
      providesTags: ["facility"],
    }),

    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["facility"],
    }),

    createFacility: builder.mutation({
      query: (data) => ({
        url: `/facility`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facility"],
    }),

    updateFacility: builder.mutation({
      query: (data) => ({
        url: `/facility/${data.id}`,
        method: "PUT",
        body: data.data,
      }),
      invalidatesTags: ["facility"],
    }),

    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facility"],
    }),
  }),
});

export default facilityApi;
