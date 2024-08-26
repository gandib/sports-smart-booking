import { TFacility, TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/facility`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TFacility[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ["facility"],
    }),

    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TFacility>) => {
        return {
          data: response.data,
        };
      },
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
